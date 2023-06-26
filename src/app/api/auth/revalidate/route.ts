import "@/database/connect";
import { Activity } from "@/interfaces";
import { verifyToken, signDocument } from "@/jwt";
import { UserService } from "@/services";

const userService = new UserService();

export async function GET(req: Request) {
  const token = req.headers.get("Authorization")?.split(" ")[1];
  if (!token)
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });

  try {
    const userId = await verifyToken(token);
    const user = await userService.getUserById(userId);
    const { _id, activities } = user as unknown as {
      _id: string;
      activities: Activity[];
    };
    const newToken = signDocument(_id, user.name, user.lastName, activities);

    if (!user)
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });
    return new Response(JSON.stringify({ token: newToken, user }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
}
