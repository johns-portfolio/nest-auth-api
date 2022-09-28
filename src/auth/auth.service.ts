import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User, UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  /**
   * It takes a username and password, finds the user in the database, and if the password matches,
   * returns the user object without the password
   * @param {string} username - string - The username of the user to validate.
   * @param {string} password - The password that the user entered.
   * @returns The user object without the password property.
   */
  validateUser(username: string, password: string) {
    const user = this.usersService.findOne(username)

    if (user && user.password === password) {
      const { password, ...rest } = user
      return rest
    }

    return undefined
  }

  signIn(user: User) {
    const payload: JwtPayload = {
      username: user.username,
      sub: user.id,
      isAdmin: user.isAdmin
    }
    console.log('🔥 login payload', payload)
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}

export interface JwtPayload {
  username: string
  sub: number
  isAdmin: boolean
  iat?: number
  exp?: number
}
