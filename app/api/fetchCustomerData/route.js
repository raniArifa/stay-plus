import { get } from "../mongoDBOperations";

export const GET = async (request) => {
  try {
    const id = request.nextUrl.searchParams.get("id")
    const allCustomerData = await get(id);
    // 3. Success response back
    return Response.json({
      data: allCustomerData,
    });
  } catch (error) {
    return Response.json({
      message: "Error while fetching customer information",
      errorDetails: error,
    });
  }
};
