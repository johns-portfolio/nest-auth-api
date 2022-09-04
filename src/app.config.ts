import * as dotenv from 'dotenv'
dotenv.config()

export const appConfig = {
  jwtSecret: process.env.JWT_SECRET!
}
