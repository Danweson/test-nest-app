import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
   /*  ServeStaticModule.forRoot([
      {
        rootPath: join(__dirname, '..', 'public'), // Path to your static files
        serveRoot: '/public/', // Optional: URL path to serve static files from
      },
    ]), */
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
