import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { AuthService } from './auth/auth.service'
import { LocalAuthGuard } from './auth/local.auth.guard'

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
