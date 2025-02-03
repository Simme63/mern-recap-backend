const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const adminMiddleware = require("../middleware/adminMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

// > create a new user - POST > /api/users
router.post("/", authMiddleware, adminMiddleware, userController.createUser);
router.get("/", authMiddleware, adminMiddleware, userController.getAllUsers);
router.delete(
	"/:id",
	authMiddleware,
	adminMiddleware,
	userController.deleteUser
);

//Email and password to login
//Ludvig.Schlajmon@ga.ntig.se
//Goated420!

module.exports = router;
