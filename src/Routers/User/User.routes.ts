import { Router } from 'express'
import {
    getUserController,
    UpdateUserProfileController,
    SaveTopicOfAllControllers,
} from '../../Controllers/User/User.controllert'
import verifyToken from '../../Middlewares/Auth.middleware'

const router = Router()

// Get user profile
router.get('/user/', verifyToken, getUserController)

// Update user profile
router.put('/user/settings/update', verifyToken, UpdateUserProfileController)

// Add Save Topic
router.put('/user/settings/save', verifyToken, SaveTopicOfAllControllers)

export default router
