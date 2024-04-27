import express from 'express'
import { mailController } from '../Controllers/Portfolio.controllers.js';



const router = express.Router()

router.post('/send-email',mailController) //http://localhost:3001/api/send-email

export default router;