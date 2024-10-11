import { Body, Controller, Get, Param } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get('email')
  welcome() {
    return this.emailService.sendWelcomeMemberMail();
  }

  @Get('createEmail')
  create(@Body() createEmailDto: CreateEmailDto) {
    return this.emailService.create(createEmailDto);
  }

  @Get('findAllEmail')
  findAll() {
    return this.emailService.findAll();
  }

  @Get('findOneEmail')
  findOne(@Param() id: number) {
    return this.emailService.findOne(id);
  }

  @Get('updateEmail')
  update(@Param() updateEmailDto: UpdateEmailDto) {
    return this.emailService.update(updateEmailDto.id, updateEmailDto);
  }

  @Get('removeEmail')
  remove(@Param() id: number) {
    return this.emailService.remove(id);
  }
}
