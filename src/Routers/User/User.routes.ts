import { Router } from "express";
import { getUserController } from "../../Controllers/User/User.controllert";
import verifyToken from "../../Middlewares/Auth.middleware";

const router = Router();

router.get('/user', verifyToken, getUserController)

export default router;