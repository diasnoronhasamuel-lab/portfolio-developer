import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import adminRouter from './routes/admin.js'
import contactRouter from './routes/contact.js'
import projectsRouter from './routes/projects.js'

const app = express()
const port = Number(process.env.PORT || 3001)
const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173'

app.use(helmet())
app.use(cors({
  origin(origin, callback) {
    if (!origin || origin === clientUrl) return callback(null, true)
    return callback(new Error('Origem não permitida pelo CORS.'))
  },
}))
app.use(express.json({ limit: '10kb' }))

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))
app.use('/api/projects', projectsRouter)
app.use('/api/contact', contactRouter)
app.use('/api/admin', adminRouter)

app.use((error, req, res, next) => {
  if (res.headersSent) return next(error)
  if (error.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'O corpo da requisição não contém JSON válido.' })
  }
  if (error.message === 'Origem não permitida pelo CORS.') {
    return res.status(403).json({ error: error.message })
  }
  console.error('Erro na API:', error)
  return res.status(500).json({ error: 'Erro interno ao processar a solicitação.' })
})

app.listen(port, () => {
  console.log(`API disponível em http://localhost:${port}`)
})
