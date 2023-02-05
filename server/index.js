import express, {Router} from "express";
import acl from "./services/acl.js";
import apiDescription from './api-description.js'
import users from "./routes/users.js";
import login from "./routes/login.js";
import genericRoutes from "./routes/generic-routes.js";
import dbConnection from "./services/db-connection.js";
import cookieParser from "cookie-parser";

import session from "express-session";
import server from "express/lib/application.js";


const app = express();
app.use(express.json())
const port = 3333
const host = `http://localhost:${port}`
app.use(cookieParser())
// noinspection SpellCheckingInspection
app.use(session({
    secret: 'asoivoiwi nw  keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, // set to true with https
        httpOnly: true
    }
}))

// set to true to bypass 2FA verification (do this in dev only)
const bypass2FA = true

// set bypass 2FA verification 
app.use(function (req, res, next) {
    req.bypassVerification = bypass2FA;
    next()
})

const router = Router()
router.use('/', apiDescription)
    .use('/rest', acl)
    .use('/rest', dbConnection)
    .use('/rest/users', users)
    .use('/rest/login', login)
    .use('/rest', genericRoutes)
    //server.use(acl) // kommentera bort för att tillfälligt stänga av all autentisering

app.use(router)

// start
app.listen(port, () => {
    console.log(host)
    console.log('server running on port ' + port)
})


// custom REST API routes

// generic REST API one-to-one table mappings
