import { Router } from 'express'
import verifyToken from '../../Middlewares/Auth.middleware'
import { PostPaymentRequest } from '../../Controllers/stripe/payment.stripe'
const router = Router()

// create Cart
router.post('/payment/cash', verifyToken, PostPaymentRequest)

export default router
