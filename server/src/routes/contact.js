import { Router } from 'express'
import { db } from '../db.js'
import { contactRateLimit } from '../middleware/rateLimit.js'
import { validateContact } from '../middleware/validate.js'

const router = Router()

router.post('/', contactRateLimit, validateContact, (req, res, next) => {
  try {
    db.prepare('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)')
      .run(req.contact.name, req.contact.email, req.contact.message)
    res.status(201).json({ message: 'Mensagem enviada com sucesso.' })
  } catch (error) {
    next(error)
  }
})

export default router
