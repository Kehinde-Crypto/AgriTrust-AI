import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(JwtAuthGuard)
  @Get('secure')
  getSecureData(@Request() req: any): any {
    // req.user will contain the decoded Auth0 JWT payload
    return {
      message: 'You have accessed a secure route!',
      user: req.user,
    };
  }
}
