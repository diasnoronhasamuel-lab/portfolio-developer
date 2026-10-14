import { rateLimit } from 'express-rate-limit'

export const contactRateLimit = rateLimit({
  windowMs: 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Muitas tentativas. Aguarde um minuto e tente novamente.' },
})
