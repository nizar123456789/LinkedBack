const express = require('express');
const {
    authUser,
    registerUser,
    updateUserProfile,
} = require("../controllers/userControllers");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports = router;