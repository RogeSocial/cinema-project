import {Router} from "express";

const router = Router()

router.get("/", async (req, res) => {
    res.json([
        {
            route: "/",
            methods: ["GET"],
            description: "This route: The API documentation"
        },
        {
            route: "/api/login",
            methods: ["POST", "GET", "DELETE"],
            description: "Login user, get current logged in user, logout"
        },
        {
            route: "/api/users",
            methods: ["GET", "POST", "PUT"],
            description: "Get list of users, create user, add/change user details",
        },
        {
            route: "/api/users/password",
            methods: ["DELETE", "PATCH"],
            description: "Clear old password, add new password",
        },
        {
            route: "/api/users/password",
            methods: ["GET", "POST", "PUT", "DELETE"],
            description: "Clear old password, add new password",
        }
    ])
})

export default router