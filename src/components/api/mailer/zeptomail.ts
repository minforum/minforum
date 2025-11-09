import axios from 'axios';
import { r, Settings } from '../model';
import { settingsProp } from 'interfaces/settings';

const sendWithZeptomail = async (
  email: string,
  name: string,
  title: string,
  template: string
) => {
  try {
    const settings = await Settings.orderBy(r.asc('createdAt'));
    const {
      email: emailConfig,
      senderName,
      senderEmail
    }: settingsProp = settings[0];

    await axios.post(
      'https://api.zeptomail.com/v1.1/email',
      {
        from: { address: senderEmail, name: senderName },
        to: [{ email_address: { address: email, name } }],
        subject: title,
        htmlbody: template
      },
      {
        headers: {
          Authorization: emailConfig.zeptomail.token
        }
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendWithZeptomail;
