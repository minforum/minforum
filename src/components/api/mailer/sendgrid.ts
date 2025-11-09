import { r, Settings } from '../model';
import { settingsProp } from 'interfaces/settings';
import sgMail from '@sendgrid/mail';

const sendWithSendgrid = async (
  email: string,
  title: string,
  template: string
) => {
  const settings = await Settings.orderBy(r.asc('createdAt'));
  const { email: emailConfig, senderEmail }: settingsProp = settings[0];

  const msg = {
    to: email,
    from: senderEmail,
    subject: title,
    text: '',
    html: template
  };

  sgMail.setApiKey(emailConfig.sendgrid.apiKey);

  sgMail.send(msg);
};

export default sendWithSendgrid;
