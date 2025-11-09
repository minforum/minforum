import { settingsProp } from 'interfaces/settings';
import { r, Settings } from '../model';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sendWithSes = async (
  email: string,
  name: string,
  title: string,
  template: string
) => {
  const settings = await Settings.orderBy(r.asc('createdAt'));
  const {
    email: emailConfig,
    senderName,
    senderEmail
  }: settingsProp = settings[0];

  // Configure AWS SES client
  const sesClient = new SESClient({
    region: emailConfig.awsSes.region,
    credentials: {
      accessKeyId: emailConfig.awsSes.accessKeyId,
      secretAccessKey: emailConfig.awsSes.secretAccessKey
    }
  });

  try {
    const params = {
      Source: senderEmail,
      Destination: {
        ToAddresses: [`${name} <${email}>`]
      },
      Message: {
        Subject: {
          Data: title,
          Charset: 'UTF-8'
        },
        Body: {
          Html: {
            Data: template,
            Charset: 'UTF-8'
          }
        }
      }
    };

    const command = new SendEmailCommand(params);
    const result = await sesClient.send(command);

    console.log('Email sent successfully:', result.MessageId);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // Re-throw to handle in calling function
  }
};

export default sendWithSes;
