import { createTransport } from "nodemailer";

export const sendEmail = async (subject, html, to, isAdmin = false) => {
  const host = process.env.EMAIL_SMTP_HOST || "";
  const port = process.env.EMAIL_SMTP_PORT || 587;
  const user = !isAdmin ? process.env.SENDER_EMAIL_USER_TO_CUSTOMER : process.env.SENDER_EMAIL_USER_TO_ADMIN;
  const pass = !isAdmin ? process.env.SENDER_EMAIL_PASSWORD_TO_CUSTOMER : process.env.SENDER_EMAIL_PASSWORD_TO_ADMIN;
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
    },
    logger: true,
    debug: true,
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
