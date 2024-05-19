import { connect } from 'mongoose'
import app from './app.js'
import Pay from 'razorpay'

const port = process.env.PORT

connect(process.env.MONGO_URI)
    .then(con => console.log(`Connected to DB ${con.connection.host}`))
    .catch(err => console.log(err))

export const instance = new Pay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET
})

app.listen(port, () => console.log(`Server Listening on port ${port}`))