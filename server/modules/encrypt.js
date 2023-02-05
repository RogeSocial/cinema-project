import crypto from "crypto";

// noinspection SpellCheckingInspection
const salt = "asefhwuhvuaseowrm".toString('hex')

export default function (password) { // utility att skapa kryperade lösenord
  return crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString('hex')
}