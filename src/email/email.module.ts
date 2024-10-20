import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import mailerConfig from './mailer.config';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    /* ConfigModule.forRoot({
      load: [mailerConfig],
    }), */
   
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: 'smtp.mailersend.net',
          port: 587,
          secure: false,
          auth: {
            user: process.env.MAILERSEND_USERNAME, // your MailerSend username
            pass: process.env.MAILERSEND_PASSWORD, // your MailerSend API key
          },
        },
        defaults: {
          from: `"KEI" <${process.env.MAILERSEND_USERNAME}>`,
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new EjsAdapter(),
          options: {
            strict: false,
          },
        },
      }),
      inject: [ConfigService],
    }),
    
    /* MailerModule.forRootAsync({
      useFactory: async () => ({
        transport: {
          host: 'smtp.mailersend.net',
          port: 587,
          auth: {
            user: process.env.MAILERSEND_USERNAME, // your MailerSend username
            pass: process.env.MAILERSEND_API_KEY, // your MailerSend API key
          },
        },
        defaults: {
          from: '"No Reply" christophedanson90@gmail.com', // your default sender email
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new EjsAdapter(),
          options: {
            strict: false,
          },
        },
      }),
    }), */

  ],
  controllers: [EmailController],
  providers: [
    EmailService,
    ConfigService,
  ],
  exports: [EmailService],
})
export class EmailModule {}
