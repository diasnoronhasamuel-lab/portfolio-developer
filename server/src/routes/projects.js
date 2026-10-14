import { Router } from 'express'
import { db } from '../db.js'

const router = Router()

router.get('/', (req, res, next) => {
  try {
    const projects = db.prepare(`
      SELECT id, title, description, stack, live_url, repo_url, position, created_at
      FROM projects
      ORDER BY position ASC
    `).all()
    res.json(projects.map((project) => ({ ...project, stack: JSON.parse(project.stack) })))
  } catch (error) {
    next(error)
  }
})

export default router
