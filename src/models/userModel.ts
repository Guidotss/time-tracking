import mongoose, { Model, Schema } from "mongoose";
import { IActivity } from "./activityModel";

interface IUser {
  name: string;
  password: string;
  lastName: string; 
  activity: IActivity[];
}

const UserSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  activity: [{type: Schema.Types.ObjectId,ref: "Activity",}],
});

const userModel: Model<IUser> =
  mongoose.models.User || mongoose.model("User", UserSchema);
export default userModel;
