import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Request,
  UseGuards
} from '@nestjs/common'
import { JwtAuthGuard } from '../auth/jwt.auth.guard'
import { UsersService } from './users.service'

@Controller('v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getUserInfo(@Request() req) {
    const { sub: id } = req.user
    const user = this.usersService.findById(id)
    if (!user) {
      throw new NotFoundException()
    }

    delete user.password
    return user
  }
}
