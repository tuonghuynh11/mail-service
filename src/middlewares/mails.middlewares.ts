import { checkSchema } from 'express-validator'
import { validate } from '~/utils/validation'

export const sendExpertAccountCreatedMailValidator = validate(
  checkSchema(
    {
      email: {
        notEmpty: true,
        isEmail: true,
        trim: true
      },
      password: {
        notEmpty: true,
        trim: true
      },
      name: {
        notEmpty: true,
        trim: true
      }
    },
    ['body']
  )
)
export const sendVerifyMailValidator = validate(
  checkSchema(
    {
      email: {
        notEmpty: true,
        isEmail: true,
        trim: true
      },
      otp_code: {
        notEmpty: true,
        trim: true,
        isLength: {
          options: { min: 4, max: 4 },
          errorMessage: 'OTP code must be exactly 6 characters long'
        }
      }
    },
    ['body']
  )
)
