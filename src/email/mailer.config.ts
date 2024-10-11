// src/mailer.config.ts
import { registerAs } from '@nestjs/config';

export default registerAs('mailer', () => ({
  apiKey: process.env.MAILERSEND_API_KEY,
  fromEmail: process.env.MAILERSEND_FROM_EMAIL,
}));
