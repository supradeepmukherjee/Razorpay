import { Router } from 'express'
import { checkout, key, verifyPayment } from './controllers.js'

const app = Router()

app.post('/checkout', checkout)
app.get('/key', key)
app.post('/verify', verifyPayment)

export default app