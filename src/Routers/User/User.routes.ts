import { Router } from "express";
import { getUserController, UpdateUserProfileController } from "../../Controllers/User/User.controllert";
import verifyToken from "../../Middlewares/Auth.middleware";

const router = Router();

// Get user profile
router.get('/user', verifyToken, getUserController)

// Update user profile
router.put('/user/update', verifyToken, UpdateUserProfileController)

export default router;