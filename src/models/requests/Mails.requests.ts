export interface CreateExpertAccountCreatedMailReqBody {
  email: string
  password: string
  name: string
}
export interface CreateVerifyMailReqBody {
  email: string
  otp_code: string
}
export interface CreateForgotPasswordMailReqBody {
  email: string
  otp_code: string
}
