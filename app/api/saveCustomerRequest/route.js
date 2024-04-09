import { save } from "../mongoDBOperations";
import { sendEmail } from "../emailOperations";
import readFileContent from "../readFile";
import { adminEmailContent } from "../adminEmailContent";

export const POST = async (request, response) => {
  try {
    // 1. First save information to database
    const body = await request.json();
    // add creation time using current date time
    body.creationTime = new Date().toLocaleDateString();
    await save(body);
    // 2. first send email to recipent
    const { emailAddress } = body;
    const subjectForCustomer = process.env.CUSTOMER_EMAIL_SUBJECT || "";
    const htmlForCustomer = await readFileContent("app/api/customerEmail.html");
    sendEmail(subjectForCustomer, htmlForCustomer, emailAddress);
    // 3. Success response back
    return Response.json({
      message: `Thankyou. We've received your request and one of our team members will be in touch shortly.
      Best Regards,
      Stay Plus`,
    });
  } catch (error) {
    return Response.json({
      message: "Form not submitted due to some problems!",
      errorDetails: error,
    });
  }
};
