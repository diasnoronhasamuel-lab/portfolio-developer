import { timingSafeEqual } from 'node:crypto'

export function requireAdmin(req, res, next) {
  const password = process.env.ADMIN_PASSWORD
  if (!password) {
    return res.status(503).json({ error: 'A senha de administrador não está configurada no servidor.' })
  }

  const token = req.get('authorization')?.replace(/^Bearer\s+/i, '')
  const expected = Buffer.from(password)
  const provided = Buffer.from(token || '')
  const valid = expected.length === provided.length && timingSafeEqual(expected, provided)

  if (!valid) {
    return res.status(401).json({ error: 'Senha de administrador inválida.' })
  }
  return next()
}
