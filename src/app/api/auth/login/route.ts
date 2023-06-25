import "@/database/connect";
import { signDocument } from "@/jwt";
import { UserService } from "@/services";

const userService = new UserService();

export async function POST(req: Request) {
  const { name, password } = await req.json();
  if (!name || !password) throw new Error("Missing name or password");

  try {
    const user = await userService.login(name, password);
    if (!user) return new Response("User does not exist", { status: 404 });

    const { _id, lastName } = user as unknown as { _id: string, lastName: string };
    const token = signDocument(_id, name, lastName);

    return new Response(
      JSON.stringify({
        message: "User login successfully",
        name: user.name,
        lastName: user.lastName,
        activity: user.activity,
        id: user._id,
        token,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response("Error login user", { status: 500 });
  }
}
