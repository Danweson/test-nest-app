import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {

  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use('/images', express.static('./public/images'));
  // Set EJS as the template engine
  app.setViewEngine('ejs');
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  
  console.log('SMTP_USER:', process.env.MAILERSEND_USERNAME);
  console.log('SMTP_PASS:', process.env.MAILERSEND_API_KEY);
  await app.listen(3000);
}
bootstrap();
