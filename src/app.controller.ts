import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

    @Get("/home")
    @Render('index')
    root() {
      return {fullname: "Christophe"}; 
    }

    @Get("/welcome")
    @Render('welcome')
    welcome() {
      return {fullname: "Christophe"}; 
    }

    @Get("/invitation")
    @Render('invitation')
    invitation() {
      return {fullname: "Christophe", team: "Team Danson SCI"}; 
    }

    @Get("/welcome-invitation")
    @Render('welcome-invitation')
    confInvitation() {
      return {fullname: "Christophe", team: "Team Danson SCI"}; 
    }

    @Get("/password-forgotten")
    @Render('password-forgotten')
    passwordForgotten() {
      return {fullname: "Christophe"}; 
    }

    @Get("/welcome-resetting-pwd")
    @Render('welcome-resetting-pwd')
    welcomeResettingPwd() {
      return {fullname: "Christophe"}; 
    }

    @Get("/suspension")
    @Render('suspension')
   suspension() {
      return {fullname: "Christophe", team: "Team Danson SCI"}; 
    }

    @Get("/revoking-suspension")
    @Render('revoking-suspension')
    revokingSuspension() {
      return {fullname: "Christophe"}; 
    }
}
