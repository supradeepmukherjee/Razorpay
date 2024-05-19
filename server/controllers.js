import { createHmac } from 'crypto'
import { Payment } from './Model.js'
import { instance } from './server.js'

const checkout = async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.amt * 100),  // amount in the smallest currency unit
            currency: "INR",
        }
        const order = await instance.orders.create(options)
        res.status(201).json({ success: true, order })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, msg: 'Failed to create Order due to some internal server error' })
    }
}

const verifyPayment = async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body
        const body = `${razorpay_order_id}|${razorpay_payment_id}`
        const expectedSignature =
            createHmac('sha256', process.env.RAZORPAY_SECRET)
                .update(body.toString())
                .digest('hex')
        const { signature } = await Payment.create({
            paymentID: razorpay_payment_id,
            orderID: razorpay_order_id,
            signature: razorpay_signature
        })
        if (expectedSignature !== signature) return res.status(400).json({ success: false, msg: 'Invalid Payment Signature' })
        res.redirect(`${process.env.FRONTEND}/success?ref=${razorpay_payment_id}`)
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, msg: 'Failed to Verify Payment due to some internal server error' })
    }
}

const key = async (req, res) => res.status(200).json({ success: true, key: process.env.RAZORPAY_KEY })

export { checkout, verifyPayment, key }
