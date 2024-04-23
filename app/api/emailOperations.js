import { createTransport } from "nodemailer";

export const sendEmail = async (subject, html, toEmailAddress) => {
  const host = process.env.EMAIL_SMTP_HOST || "";
  const port = process.env.EMAIL_SMTP_PORT || 587;
  const user = process.env.SENDER_EMAIL_USER_TO_CUSTOMER;
  const pass = process.env.SENDER_EMAIL_PASSWORD_TO_CUSTOMER;
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
    to: toEmailAddress,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info.response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};