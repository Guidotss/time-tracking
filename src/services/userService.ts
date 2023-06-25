import UserModel from "@/models/userModel";
import bcypt from "bcrypt";

export class UserService {
  private userModel = UserModel;

  private async hashPassword(password: string) {
    return await bcypt.hash(password, 10);
  }

  private async comparePassword(password: string, hashedPassword: string) {
    return await bcypt.compare(password, hashedPassword);
  }

  public async createUser(name: string, lastName: string, password: string) {
    try {
      const hashedPassword = await this.hashPassword(password);
      const user = new this.userModel({
        name,
        lastName,
        password: hashedPassword,
      });
      await user.save();
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Error creating user");
    }
  }

  public login = async (name: string, password: string) => {
    try {
      const user = await this.userModel.findOne({ name }).lean();
      if (!user) {
        throw new Error("User does not exist");
      }

      const validPassword = await this.comparePassword(password, user.password);
      if (!validPassword) {
        throw new Error("Invalid password");
      }
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Error login user");
    }
  };

  public async getUserById(id: string) {
    try {
      const user = await this.userModel
        .findById(id)
        .populate("activity")
        .lean()
        .select("-password");
      if (!user) {
        throw new Error("User does not exist");
      }
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Error getting user");
    }
  }
}
