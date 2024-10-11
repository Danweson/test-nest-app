import { Inject, Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { join } from 'path';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {

  constructor(
    private mailerService: MailerService,
    @Inject(ConfigService) private configService: ConfigService
  ) { }

  /* async sendEmail(to: string, subject: string, templateName: string, context: any) {
    const templatePath = join(__dirname, '..', 'templates', `${templateName}.ejs`);

    const html = await new Promise<string>((resolve, reject) => {
      compileFile(templatePath, context, (err, compiled) => {
        if (err) return reject(err);
        resolve(compiled);
      });
    });

   
  } */

    async sendWelcomeMemberMail() {
      const fullname = `Christopher DANSON`;
  
      await this.mailerService.sendMail({
        to: "activityplanning1@gmail.com",
        subject: 'KEI - Mail Welcome',
        template: './welcome',
        context: {
          fullname,
        },
      });
    }

  create(createEmailDto: CreateEmailDto) {
    
    return 'This action adds a new email';
  }

  findAll() {
    return `This action returns all email`;
  }

  findOne(id: number) {
    return `This action returns a #${id} email`;
  }

  update(id: number, updateEmailDto: UpdateEmailDto) {
    return `This action updates a #${id} email`;
  }

  remove(id: number) {
    return `This action removes a #${id} email`;
  }
}
