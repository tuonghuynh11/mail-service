import { Router } from 'express'
import { uploadImageController, uploadVideoController } from '~/controllers/medias.controllers'
import { wrapRequestHandler } from '~/utils/handles'
// Base route: /medias
const mediaRouter = Router()

mediaRouter.post('/upload-videos', wrapRequestHandler(uploadVideoController))
mediaRouter.post('/upload-images', wrapRequestHandler(uploadImageController))
export default mediaRouter
