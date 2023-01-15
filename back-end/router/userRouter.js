import express from "express"
import { registerUser, loginUser } from "../controller/userController"
const router = express.Router();

router.route("/").get();
// router.route("")

export default router;