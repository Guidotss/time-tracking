import { Activity } from "@/interfaces";
import mongoose, { Model, Schema } from "mongoose";


interface IUser {
  name: string;
  password: string;
  lastName: string;
  activities: Activity[];
}

const activitySchema = new Schema({
  title: { type: String, required: true },
  hours: { type: Number, required: true },
});

const UserSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  activities: {
    type: [activitySchema],
    required: false,
    default: [
      { title: "Work", hours: 0 },
      { title: "Play", hours: 0 },
      { title: "Study", hours: 0 },
      { title: "Exercise", hours: 0 },
      { title: "Social", hours: 0 },
      { title: "Self-care", hours: 0 },
    ],
  },
});

const userModel: Model<IUser> =
  mongoose.models.User || mongoose.model("User", UserSchema);
export default userModel;
