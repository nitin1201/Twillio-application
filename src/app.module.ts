import { Module } from '@nestjs/common';
import { EmailController } from './app.controller';
import { EmailService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.local.env`],
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class AppModule {}
