import { save } from "../mongoDBOperations"
import { sendEmail } from "../emailOperations"

async function POST(request) {
  const { body } = request
  body.creationTime = new Date().toLocaleDateString()
  save(body)
  // first send to recipent
  const { emailAddress } = body
  const subjectForCustomer = process.env.CUSTOMER_EMAIL_SUBJECT || ""
  const textForCustomer = process.env.CUSTOMER_EMAIL_TEXT || ""
  sendEmail(subjectForCustomer, textForCustomer, emailAddress)
  // Now send email to admin
  const emailAddressForAdmin = process.env.ADMIN_EMAIL_ADDRESS || ""
  const subjectForAdmin = process.env.ADMIN_EMAIL_SUBJECT || ""
  sendEmail(subjectForAdmin, "", emailAddressForAdmin)

  return Response.json({ message: `Customer is created on ${body.creationTime} and email is sent to both recipent and admin`  })
}

export default POST
