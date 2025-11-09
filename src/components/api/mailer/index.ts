import { r, Settings } from '../model';
import sendWithSmtp from './smtp';
import sendWithSes from './aws-ses';
import sendWithSendgrid from './sendgrid';
import sendWithZeptomail from './zeptomail';
import { settingsProp } from 'interfaces/settings';

const sendMail = async (
  email: string,
  name: string,
  title: string,
  template: string
) => {
  const settings = await Settings.orderBy(r.asc('createdAt'));
  const { email: emailConfig }: settingsProp = settings[0];
  const method = emailConfig.method || 'smtp';

  if (method === 'smtp') {
    await sendWithSmtp(email, title, template);
  } else if (method === 'ses') {
    await sendWithSes(email, name, title, template);
  } else if (method === 'sendgrid') {
    await sendWithSendgrid(email, title, template);
  } else if (method === 'zeptomail') {
    await sendWithZeptomail(email, name, title, template);
  }
};

export default sendMail;
