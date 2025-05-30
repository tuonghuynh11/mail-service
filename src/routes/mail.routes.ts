import { Router } from 'express'
import {
  sendExpertAccountCreatedMailController,
  sendForgotPasswordMailController,
  sendVerifyMailController
} from '~/controllers/mails.controllers'
import { sendExpertAccountCreatedMailValidator, sendVerifyMailValidator } from '~/middlewares/mails.middlewares'
import { wrapRequestHandler } from '~/utils/handles'

//  Base route: /mails
const mailsRouter = Router()

/**
 * Description: Send Expert Account Created Mail
 * Path: /mails/send-expert-account-created-email
 * Method: Post
 * Body: {
    "email": "",
    "password":"",
    "name":"",
  }
 * **/
mailsRouter.post(
  '/send-expert-account-created-email',
  sendExpertAccountCreatedMailValidator,
  wrapRequestHandler(sendExpertAccountCreatedMailController)
)
/**
 * Description: Send Verify Mail
 * Path: /mails/send-verify-email
 * Method: Post
 * Body: {
    "email": "",
    "otp_code":"",
  }
 * **/
mailsRouter.post('/send-verify-email', sendVerifyMailValidator, wrapRequestHandler(sendVerifyMailController))
/**
 * Description: Send Forgot Password Mail
 * Path: /mails/send-forgot-password-email
 * Method: Post
 * Body: {
    "email": "",
    "otp_code":"",
  }
 * **/
mailsRouter.post(
  '/send-forgot-password-email',
  sendVerifyMailValidator,
  wrapRequestHandler(sendForgotPasswordMailController)
)

export default mailsRouter
