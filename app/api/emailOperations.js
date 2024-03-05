import { createTransport } from "nodemailer";

function sendEmail(subject, text, to) {
  const service = process.env.EMAIL_SERVICE || ""
  const user = process.env.EMAIL_USER || ""
  const pass = process.env.EMAIL_PASSWORD || ""
  const transporter = createTransport({
    service,
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: user,
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

export default sendEmail;
