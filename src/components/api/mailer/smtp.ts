import nodemailer from 'nodemailer';
import { r, Settings } from '../model';
import { settingsProp } from 'interfaces/settings';

const sendWithSmtp = async (email: string, title: string, template: string) => {
  await Settings.orderBy(r.asc('createdAt'))
    .then(async (data: any) => {
      data = data.length ? data[0] : {};

      if (data.id) {
        const { email: emailConfig } = data;

        let transporter = nodemailer.createTransport({
          host: emailConfig.host,
          port: emailConfig.port,
          secure: true,
          auth: {
            user: emailConfig.email,
            pass: emailConfig.password
          }
        });

        await transporter
          .sendMail({
            from: `${data.senderName || data.siteName} <${data.senderEmail || `no-reply@${data.domain}`}>`,
            to: email,
            subject: title,
            html: template
          })
          .then((mail: any) => console.log(mail));
      }
    })
    .catch((err: any) => console.log(err));
};

export default sendWithSmtp;
