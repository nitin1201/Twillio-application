import { Body, Injectable } from '@nestjs/common';
import * as client from '@sendgrid/client';
import * as sgMail from '@sendgrid/mail';
import axios from 'axios';

@Injectable()
export class EmailService {
  constructor() {
    sgMail.setApiKey(process.env.API_KEY);
    client.setApiKey(process.env.API_KEY);
  }
  async sendEmail(
    to: string,
    subject: string,
    text: string,
    html: string,
  ): Promise<void> {
    const msg = {
      to,
      from: process.env.MY_EMAIL,
      subject,
      text,
      html,
      templateId: process.env.Template_ID,
    };

    try {
      const response = await sgMail.send(msg);
      console.log('Email sent successfully', response);
    } catch (error) {
      console.log(error);
      throw new Error('Failed to send email');
    }
  }
  //email_tracking
  async getTemplates(): Promise<any> {
    const request = {
      url: '/v3/messages/eN4cHrJoSj-UH8T8kRHjpw.recvd-5f9ffdf494-dflbw-1-6746F5F7-6.0',
    };
    try {
      const req = await client.request(request);
      return req;
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.error('Error details:', error.response.body.errors);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }
}
