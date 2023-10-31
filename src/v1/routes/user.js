const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");
router

    .get("/",userController.getAllUser)

    .get("/:workoutId",userController.getOneUser)

    .post("/", userController.createNewUser)

    .patch("/:workoutId", userController.updateNewUser)

    .delete("/:workoutId", userController.deleteOneUser);


module.exports = router;