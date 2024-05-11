export const GET = async (request) => {
  try {
    const username = request.nextUrl.searchParams.get("username");
    const password = request.nextUrl.searchParams.get("password");
    if (
      process.env.ADMIN_LOGIN_USERNAME.toLocaleLowerCase() ===
        username.toLocaleLowerCase() &&
      process.env.ADMIN_LOGIN_PASSWORD === password.toLocaleLowerCase()
    ) {
      return Response.json({
        message: "Login Success",
        status: 200,
      });
    } else {
      return Response.json({
        message: "Invalid username or password!",
        status: 401,
      });
    }
  } catch (error) {
    return Response.json({
      message: "Error while trying to login",
      errorDetails: error,
    });
  }
};
