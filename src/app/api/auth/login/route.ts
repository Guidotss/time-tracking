import "@/database/connect";
import { UserService } from "@/services";

const userService = new UserService();

export async function POST(req: Request) {
  const { name, password } = await req.json();
  if (!name || !password) throw new Error("Missing name or password");

  try {
    const user = await userService.login(name, password);
    if (!user) return new Response("User does not exist", { status: 404 });
    return new Response(
      JSON.stringify({
        message: "User login successfully",
        name: user.name,
        activity: user.activity,
        id: user._id,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response("Error login user", { status: 500 });
  }
}
