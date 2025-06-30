const { Router } = require("express");

const userRouter = Router();

  userRouter.post("/signup", function(req, res){
        res.json({
            message: "signup endpoint"
        })
    })

    userRouter.post("signin", function(req, res){
        res.join({
            message: "signin endpoint"
        })
    })

    userRouter.get("/purchases", function(req,res){
        res.json({
            message: "purchases endpoint"
        })
    })


module.exports = {
    userRouter: userRouter
}