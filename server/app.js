import express from "express"
import env from 'dotenv'
import router from './routes.js'
import cors from 'cors'

env.config({ path: './.env' })

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', router)

export default app