import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgressUsersRepository implements IUsersRepository {
  private Users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.Users.find(user => user.email === email);
    console.log(user);
    return user;
  }

  async save(user: User): Promise<void> {
    this.Users.push(user);
  }
}
