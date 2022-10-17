import { Router } from "express";
import verifyToken from "../../Middlewares/Auth.middleware";
import { createHallsController } from "../../Controllers/Halls/Halls.Controller"

const router = Router();

// create Halls
router.post('/create/halls', verifyToken, createHallsController)

export default router;