const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

router.post("/users", auth.authenticate, userController.createUser);

router.post("/login", auth.authenticate, userController.loginUser);

router.get("/users/:userId", auth.authorise, userController.getUserData);
router.post("/users/:userId/posts", auth.authorise, userController.postMessage);

router.put("/users/:userId", auth.authorise, userController.updateUser);
router.delete("/users/:userId", auth.authorise, userController.deleteUser);

module.exports = router;
