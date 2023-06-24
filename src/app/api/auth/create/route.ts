import { UserService } from "@/services";
import "@/database/connect";

const userService = new UserService();

export async function POST(req: Request) {
  const { name, password } = await req.json();
  try {
    if (!name || !password)
      return new Response(
        JSON.stringify({ error: "Missing name or password" }),
        { status: 400 }
      );
    const newUser = await userService.createUser(name, password);
    if (!newUser)
      return new Response(JSON.stringify({ error: "Error creating user" }), {
        status: 500,
      });

    return new Response(JSON.stringify({ message: "User created",name:newUser.name, activity: newUser.activity, id: newUser._id }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Error creating user" }), {
      status: 500,
    });
  }
}