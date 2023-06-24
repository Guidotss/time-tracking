import { UserService } from ".";
import ActivityModel from "@/models/activityModel";

export class ActivityService {
  private activityModel = ActivityModel;
  constructor(private userService: UserService = new UserService()) {}

  public async createActivity(userId: string, title: string, hours: number) {
    try {
      const user = await this.userService.getUserById(userId);
      const activity = new this.activityModel({ title, hours });
      await activity.save();
      user.activity.push(activity);
      await user.save();
      return activity;
    } catch (error) {
      console.log(error);
      throw new Error("Error creating activity");
    }
  }
}
