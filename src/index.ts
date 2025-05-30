import express from 'express'
import { envConfig } from './constants/config'
import cors, { CorsOptions } from 'cors'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import helmet from 'helmet'
import { initFolder } from './utils/file'
import morganMiddleware from './middlewares/morgan'
import { versionOneRouter } from './routes/index.routes'
import mailService from './services/mail.services'
const app = express()
const PORT = envConfig.port

initFolder()
mailService.connect()
//Use Helmet
app.use(helmet())
const corsOptions: CorsOptions = {
  origin: '*'
}
app.use(cors(corsOptions))
app.use(morganMiddleware)

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello!')
})

// Use the versioned router with a single prefix
app.use('/api/v1', versionOneRouter)

//Error Handler must be place in the end of handlers
app.use(defaultErrorHandler)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}!`)
})
