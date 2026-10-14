import { Router } from 'express'
import { db } from '../db.js'
import { requireAdmin } from '../middleware/auth.js'

const router = Router()

router.get('/messages', requireAdmin, (req, res, next) => {
  try {
    const messages = db.prepare(`
      SELECT id, name, email, message, created_at
      FROM messages
      ORDER BY created_at DESC, id DESC
    `).all()
    res.json(messages)
  } catch (error) {
    next(error)
  }
})

export default router
