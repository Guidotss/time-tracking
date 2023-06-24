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


  public login = async (name: string, password: string) => {
    try{
      
      const user = await this.userModel.findOne({ name }).lean();
      if (!user) {
        throw new Error("User does not exist");
      }
      
      const validPassword = await this.comparePassword(password, user.password);
      if (!validPassword) {
        throw new Error("Invalid password");
      }
      return user;


    }catch(error){
      console.log(error);
      throw new Error("Error login user");
    }
  }



}
