const { Router } = require("express");
const adminRouter = Router();


adminRouter.post("/signup", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin", function(req, res) {
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.post("/course", function(req, res) {
    res.json({
        message: "course endpoint"
    })
})

adminRouter.post("/course", function(req, res) {
    res.json({
        message: "course endpoint"
    })
})

adminRouter.post("/course/bulk", function(req, res) {
    res.json({
        message: "course endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}



