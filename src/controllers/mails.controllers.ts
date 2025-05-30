import { Request, Response } from 'express'
import {
  CreateExpertAccountCreatedMailReqBody,
  CreateForgotPasswordMailReqBody,
  CreateVerifyMailReqBody
} from '~/models/requests/Mails.requests'
import { ParamsDictionary } from 'express-serve-static-core'
import { MAILS_MESSAGES } from '~/constants/messages'
import mailService from '~/services/mail.services'

export const sendExpertAccountCreatedMailController = async (
  req: Request<ParamsDictionary, any, CreateExpertAccountCreatedMailReqBody, any>,
  res: Response
) => {
  const { email, name, password } = req.body
  const result = await mailService.sendExpertAccountCreatedMail({
    email,
    name,
    password
  })
  return res.json({
    message: MAILS_MESSAGES.SEND_EXPERT_ACCOUNT_CREATED_MAIL_SUCCESS
  })
}
export const sendVerifyMailController = async (
  req: Request<ParamsDictionary, any, CreateVerifyMailReqBody, any>,
  res: Response
) => {
  const { email, otp_code } = req.body
  const result = await mailService.sendVerifyEmail({
    email,
    otp_code
  })
  return res.json({
    message: MAILS_MESSAGES.SEND_VERIFY_MAIL_SUCCESS
  })
}
export const sendForgotPasswordMailController = async (
  req: Request<ParamsDictionary, any, CreateForgotPasswordMailReqBody, any>,
  res: Response
) => {
  const { email, otp_code } = req.body
  const result = await mailService.sendForgotPasswordEmail({
    email,
    otp_code
  })
  return res.json({
    message: MAILS_MESSAGES.SEND_FORGOT_PASSWORD_MAIL_SUCCESS
  })
}
