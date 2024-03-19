import { createTransport } from "nodemailer";

export const sendEmail = async (subject, html, to) => {
  const host = process.env.EMAIL_SMTP_HOST || "";
  const port = process.env.EMAIL_SMTP_PORT || 587;
  const user = process.env.EMAIL_USER || "";
  const pass = process.env.EMAIL_PASSWORD || "";
  const transporter = createTransport({
    host,
    port,
    secure: false,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: user,
    to,
    subject,
    html,
  };

  return transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return error;
    } else {
      return info.response;
    }
  });
};
