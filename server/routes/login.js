import encrypt from "../modules/encrypt.js";
import {Router} from "express";

const router = Router()

// logga in
router.post('/',
    (request, response) => {

        request.session.passwordAttempts = request.session.passwordAttempts || 1

        if (request.session.passwordAttempts > 9) {
            response.status(401)
            response.json({error: "Too many attempts. You must verify your account using two-factor authentication"})
            return
        }

        console.log(request.body.password, typeof request.body.password)

        let encryptedPassword = encrypt(request.body.password)
        let user = request.db.prepare('SELECT * FROM users WHERE email = ? AND password IS NOT NULL AND password = ?').all([request.body.email, encryptedPassword])
        user = user[0]

        if (request.bypassVerification) {
            request.session.verification = {
                phone_number: user?.phone,
                status: 0
            }
        }

        if (user && user.email  && request.session?.verification?.status === 0 && request.session?.verification?.phone_number === user?.phone) {
            request.session.passwordAttempts = 0
            request.session.user = user
            request.session.user.loggedIn = true
            request.session.user.roles = typeof user.roles === 'string' ? user.roles.split(',') : "";// splittar ett textfält med roller i user tabellen
            response.json({loggedIn: true})
        } else if ((user && user.email) && request.session?.verification?.status !== 0) {
            if (!request.session.verification || request.session?.verification?.status === -1) {
                response.json({error: "You must verify your account using two-factor authentication"})
            } else {
                response.json({
                    error: "Your two-factor authentication has failed",
                    statusCode: request.session?.verification?.status
                })
            }
        } else {
            request.session.passwordAttempts++
            response.status(401) // unauthorized  https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
            response.json({loggedIn: false, message: "no matching user"})
        }
    })

router.get('/', (request, response) => {
    let user;
    if (request.session.user) {
        user = request.db.prepare('SELECT * FROM users WHERE email = ?  AND password = ?').all([request.session.user.email, request.session.user.password ])
        user = user[0]
        if(user?.roles){
            user.roles.split(',')
        }
    }
    if (user && user.email) {
        user.loggedIn = true
        delete (user.password)
        response.json(user)
    }
else {
        response.status(401)
        response.json({loggedIn: false, message: "not logged in"})
    }
})

// logga ut
router.delete('/', (request, response) => {
    request.session.destroy(() => {
        response.json({loggedIn: false})
    })
})

export default router