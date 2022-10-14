import { Router } from "express";
import { RegisterController, LoginController } from "../../Controllers/Auth/Auth.controller";

const router = Router();

router.post('/register', RegisterController)

router.post('/login', LoginController)

export default router;