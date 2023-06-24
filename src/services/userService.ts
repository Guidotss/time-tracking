import UserModel from "@/models/userModel";
import bcypt from "bcrypt";

export class UserService {
  private userModel = UserModel;

  private async hashPassword(password: string) {
    return await bcypt.hash(password, 10);
  }

  public async createUser(name: string, password: string) {
    try {
      const hashedPassword = await this.hashPassword(password);
      const user = new this.userModel({ name, password: hashedPassword });
      await user.save();
      return user;
      
    } catch (error) {
      console.log(error);
      throw new Error("Error creating user");
    }
  }
}
