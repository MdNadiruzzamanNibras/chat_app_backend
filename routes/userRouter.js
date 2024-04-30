const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controller/userController");
// const { protect } = require("../Middleware/authMiddleware");

const router = express.Router();

// router.route("/").get(protect, allUsers);
router.route("/").get(allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
