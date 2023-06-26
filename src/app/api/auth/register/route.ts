import { UserService } from "@/services";
import "@/database/connect";
import { signDocument } from "@/jwt/signDocument";
import { Activity } from "@/interfaces";

const userService = new UserService();

export async function POST(req: Request) {
  const { name, password, lastName } = await req.json();
  try {
    if (!name || !password)
      return new Response(
        JSON.stringify({ error: "Missing name or password" }),
        { status: 400 }
      );
    const newUser = await userService.createUser(name,lastName,password);
    if (!newUser)
      return new Response(JSON.stringify({ error: "Error creating user" }), {
        status: 500,
      });

    const { _id, activities } = newUser as unknown  as { _id: string, activities: Activity[] };
    console.log(lastName);

    const token = signDocument(_id, name, lastName, activities);

    return new Response(
      JSON.stringify({
        message: "User created",
        name: newUser.name,
        lastName: newUser.lastName,
        activities,
        id: newUser._id,
        token,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Error creating user" }), {
      status: 500,
    });
  }
}
