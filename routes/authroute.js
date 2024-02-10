import  express  from "express";
import { LoginController, RegisterController,forgotPasswordController } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", RegisterController);
router.post("/login", LoginController);

router.post("/forgotpassword", forgotPasswordController);

export default router;