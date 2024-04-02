import { save } from "../mongoDBOperations";
import { sendEmail } from "../emailOperations";
import readFileContent from "../readFile";
import { adminEmailContent } from "../adminEmailContent";

export const POST = async (request, response) => {
  try {
    const body = await request.json();
    body.creationTime = new Date().toLocaleDateString();
    await save(body);
    // first send to recipent
    const { emailAddress } = body;
    // Now send email to admin
    const emailAddressForAdmin = process.env.ADMIN_EMAIL_ADDRESS || "";
    const subjectForAdmin = process.env.ADMIN_EMAIL_SUBJECT || "";

    const subjectForCustomer = process.env.CUSTOMER_EMAIL_SUBJECT || "";
    const htmlForCustomer = await readFileContent("app/api/customerEmail.html");
    sendEmail(subjectForCustomer, htmlForCustomer, emailAddress);
    // TODO: use the html for admin. For now using the customer html to test.
    const textForAdmin = adminEmailContent(body);
    sendEmail(subjectForAdmin, textForAdmin, emailAddressForAdmin, true);

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
