import { Controller, Post, Body, Get } from '@nestjs/common';
import { EmailService } from './app.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}
  //send email using twillio
  @Post('send')
  async sendEmail(
    @Body('to') to: string,
    @Body('subject') subject: string,
    @Body('text') text: string,
    @Body('html') html: string,
  ): Promise<{ message: string }> {
    await this.emailService.sendEmail(to, subject, text, html);
    return { message: 'Email sent successfully' };
  }
  //get_emailtracking
  @Get('templates')
  async getTemplates() {
    await this.emailService.getTemplates();
  }

  //webhook
  @Post('webhook')
  async sendEmail1(@Body() data: string): Promise<{ message: string }> {
    console.log(data);
    return { message: 'webhook' };
  }
}
