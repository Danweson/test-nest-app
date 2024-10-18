import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get('confirmation')
  async confirmation() {
    return await this.emailService.sendConfirmationMail();
  }

  @Get('email')
  async welcome() {
    return await this.emailService.sendWelcomeMail();
  }

  @Get('mail')
  async welcome2() {
    return await this.emailService.sendWelcome();
  }

  @Post('emailSend')
  async welcomeFirst() {
    return await this.emailService.sendEmail("christophedanson90@gmail.com", "Welcome", "Good Morning !");
  }

}
