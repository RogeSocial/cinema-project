import modules from "../modules/db.js";

let db
export default function (req, _, next) {
    if (!db){
        db = modules('database/live.db')
    }
    req.db = db
    next()
}