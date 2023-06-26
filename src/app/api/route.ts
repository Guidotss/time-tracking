import { UserService } from '@/services';


const userService = new UserService();

export async function POST(req: Request) {
  const { hours, activityId } = await req.json();

  try {
    const user = await userService.increaseHours(activityId, hours);
    return new Response(JSON.stringify({ user }));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }

}
