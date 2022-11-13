import jwt from 'jsonwebtoken'

const maxAge = 45 * 24 * 60 * 60

const TokenCookie = (_id: string) => {
    const token_secret = process.env.TokenSecret as string
    return jwt.sign({ _id }, token_secret, { expiresIn: maxAge })
}

export default TokenCookie
