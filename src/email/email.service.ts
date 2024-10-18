import { Inject, Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { join } from 'path';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend';

import * as dotenv from 'dotenv';

dotenv.config();

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

  async sendConfirmationMail() {

    // console.log('Template Directory:', join(__dirname, 'templates'));
    // console.log('Template Exists:', fs.existsSync(join(__dirname, 'templates', 'welcome.ejs')));

    const fullname = `Christophe DANWE`;

    await this.mailerService.sendMail({
      to: "activityplanning1@gmail.com",
      subject: 'Bienvenue sur KEI',
      // text: 'This is a test email.',
      template: './confirmation.ejs',
      context: {
        fullname,
      },
    });
  }

  async sendWelcomeMail() {

    const fullname = `Christophe DANWE`;

    await this.mailerService.sendMail({
      to: "activityplanning1@gmail.com",
      subject: 'Bienvenue sur KEI',
      // text: 'This is a test email.',
      template: './welcome',
      context: {
        fullname,
      },
    });
  }


  async sendWelcome() {
    const mailerSend = new MailerSend({
      apiKey: "mlsn.04a12ab734fbc1384361425d87683ed0de188c2d8395d4c2e9fd0cb644d9bf20",
    });

    // const sentFrom = new Sender("christophe.danwe@proton.me", "Christophe DANWE");

    const sentFrom = new Sender("MS_QzUZ3C@trial-yzkq340d3mkld796.mlsender.net", "Christophe DANWE");

    const recipients = [
      new Recipient("activityplanning1@gmail.com", "Activity Planning")
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject("This is a Subject")
      .setHtml("<strong>This is the HTML content</strong>")
      .setText("This is the text content");

    await mailerSend.email.send(emailParams);
  }

    async sendEmail(to: string, subject: string, text: string): Promise<any> {
      const url = 'https://api.mailersend.com/v1/email';
  
      const data = {
        from: { email: 'christophe.danwe@proton.me', name: 'Christophe DANWE' },
        to: [{ email: to }],
        subject: subject,
        text: text,
      };
  
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.MAILERSEND_API_KEY}`,
      };
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Failed to send email: ${errorData.message}`);
        }
  
        return await response.json();
      } catch (error) {
        throw new Error(`Failed to send email: ${error.message}`);
      }
      
    }

}
