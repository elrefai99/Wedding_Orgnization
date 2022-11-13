import { Router } from 'express'
import verifyToken from '../../Middlewares/Auth.middleware'
import {
    createHallsController,
    getSinglePageHallController,
    getAllHallsController,
    UpdateHallController,
    DeleteHallController,
} from '../../Controllers/Halls/Halls.Controller'

const router = Router()

// create Halls
router.post('/create/halls', verifyToken, createHallsController)

// Get single page
router.get('/get/hall/:id', verifyToken, getSinglePageHallController)

// Get All halls
router.get('/get/all/halls', verifyToken, getAllHallsController)

// Update Halls
router.put('/hall/settings/update/:id', verifyToken, UpdateHallController)

// Delete Halls
router.delete('/hall/settings/delete/:id', verifyToken, DeleteHallController)

export default router
