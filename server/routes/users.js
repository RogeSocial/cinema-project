import encrypt from "../modules/encrypt.js";
import {request, response, Router} from "express";

const router = Router()


router.get('/', (request, res) => {
    let query = "SELECT id, email FROM users"
    let result = request.db.prepare(query).all()
    res.json(result)
})

router.get('/:id', (request, res) => {
    let query = "SELECT id, email FROM users WHERE id = @id"
    let result = request.db.prepare(query).all(request.params)
    res.json(result[0])
})

// registrera en ny användare
router.post('/', (request, response) => {
    let user = request.body
    let encryptedPassword = encrypt(user.password)
    let result
    try {
        result = request.db.prepare('INSERT INTO users (email, password, fullName, phoneNumber) VALUES(?,?,?,?)').run([user.email, encryptedPassword, user['fullName'], user['phoneNumber']])
    }
    catch (e) {
        console.error(e)
    }
    response.json(result)
})
// ta bort användare
router.delete('/', (request, response) => {
    let user = request.body
    let result
    try {
        result = request.db.prepare('DELETE FROM users WHERE email = ?').run([user.email])
    }
    catch (e) {
        console.error(e)
    }
    response.json(result)
})


// ändra på användarens personuppgifter
router.patch('/', (request, response)=> {
    let user = request.body
    let result
    try {
        result = request.db.prepare('UPDATE users SET email = ?, fullName = ?, phoneNumber = ?  WHERE id= ?').run([user.email, user.fullName, user.phoneNumber,  user.id])
    }
    catch(e) {
        console.error(e)
    }
    response.json(result)
})

// begär ändring av lösenord för användare
router.delete('/password', (request, response) => {
    let user = request.body
    let result
    try {
        result = request.db.prepare('UPDATE users SET password = NULL WHERE email = ?').run([user.email])
    }
    catch (e) {
        console.error(e)
    }
    response.json(result)
})



// ändra lösenord för användare
router.patch('/password', (request, response) => {
    let user = request.body
    let encryptedPassword = encrypt(user.password)
    let result
    try {
        result = request.db.prepare('UPDATE users SET password = ? WHERE password IS NULL AND email = ?').run([encryptedPassword, user.email])
    }
    catch (e) {
        console.error(e)
    }
    response.json(result)
})


export default router