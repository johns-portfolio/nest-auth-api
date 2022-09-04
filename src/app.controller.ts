import { Controller, Get } from '@nestjs/common'

@Controller('')
export class AppController {
  @Get()
  health() {
    return {
      status: 'Ok',
      version: process.env.npm_package_version
    }
  }
}
