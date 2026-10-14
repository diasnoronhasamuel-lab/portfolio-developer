const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(req, res, next) {
  const { name, email, message } = req.body || {}

  if (typeof name !== 'string' || !name.trim() || name.trim().length > 100) {
    return res.status(400).json({ error: 'Informe um nome com até 100 caracteres.' })
  }
  if (typeof email !== 'string' || email.length > 254 || !emailPattern.test(email.trim())) {
    return res.status(400).json({ error: 'Informe um e-mail válido.' })
  }
  if (typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 1000) {
    return res.status(400).json({ error: 'A mensagem deve ter entre 10 e 1000 caracteres.' })
  }

  req.contact = { name: name.trim(), email: email.trim(), message: message.trim() }
  return next()
}
