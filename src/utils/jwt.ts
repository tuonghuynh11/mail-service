import jwt from 'jsonwebtoken'



export const signToken = ({
  payload,
  privateKey,
  options = {
    algorithm: 'HS256'
  }
}: {
  payload: string | Buffer | object
  privateKey?: string
  options?: jwt.SignOptions
}) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(payload, privateKey as string, options, (error, token) => {
      if (error) {
        throw reject(error)
      }
      resolve(token as string)
    })
  })
}

export const verifyToken = ({ token, secretOrPublicKey }: { token: string; secretOrPublicKey?: string }) => {
  return new Promise<any>((resolve, reject) => {
    jwt.verify(token, secretOrPublicKey as string, (error, decoded) => {
      if (error) {
        throw reject(error)
      }
      resolve(decoded as any)
    })
  })
}
