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
      message: `Customer is created on ${body.creationTime} and email is sent to both recipent and admin`,
    });
  } catch (error) {
    return Response.json({ errorMessage: "Erro during processing customer request", errorDetails: error });
  }
};
