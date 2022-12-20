import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
  @Get('auth')
  get() {
    console.log('1234');
    return 'hi';
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async logina(@Request() req) {
    return req.user;
  }
}
