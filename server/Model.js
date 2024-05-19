import mongoose, { Schema, model } from "mongoose"

const paymentSchema = new Schema({
    orderID: {
        type: String,
        required: true
    },
    paymentID: {
        type: String,
        required: true
    },
    signature: {
        type: String,
        required: true
    },
})

export const Payment = mongoose.models.Payment || model('Payment', paymentSchema)