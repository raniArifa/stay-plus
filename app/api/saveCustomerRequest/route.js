import { save } from "../mongoDBOperations";
import { sendEmail } from "../emailOperations";

export const POST = async (request, response) => {
  try {
    const body = await request.json();
    body.creationTime = new Date().toLocaleDateString();
    await save(body);
    // first send to recipent
    const { emailAddress } = body;
    const subjectForCustomer = process.env.CUSTOMER_EMAIL_SUBJECT || "";
    const textForCustomer = process.env.CUSTOMER_EMAIL_TEXT || "";
    sendEmail(subjectForCustomer, textForCustomer, emailAddress);
    // Now send email to admin
    const emailAddressForAdmin = process.env.ADMIN_EMAIL_ADDRESS || "";
    const subjectForAdmin = process.env.ADMIN_EMAIL_SUBJECT || "";
    sendEmail(subjectForAdmin, "", emailAddressForAdmin);

    return Response.json({
      message: `Thankyou. We've received your request and one of our team members will be in touch shortly.
      Best regards,
      Stay Plus`,
    });
  } catch (error) {
    return Response.json({ message: "Form not submitted due to some problem!", errorDetails: error });
  }
};
