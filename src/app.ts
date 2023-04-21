import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { rateLimit } from 'express-rate-limit'

import books from './app/routes/books'

const app = express()
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, please try again later"
})
const router = express.Router()

app.use(express.json())
app.use(cors())
app.use(limiter)
app.use(router)

router.get('/', (req, res) => res.send(`<h1>Welcome to the home page !!!</h1>`))
books(router)

export default app