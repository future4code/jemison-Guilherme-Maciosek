import {
  InvalidEmail,
  InvalidName,
  InvalidPassword,
} from "./../error/UserError";
import { CustomError } from "./../error/CustomError";
import { generateId } from "./../services/idGenerator";
import { createUserDTO } from "./../model/CreateUserDTO";
import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {
  async create({ email, name, password }: createUserDTO): Promise<void> {
    if (!email) {
      throw new InvalidEmail();
    }
    if (!name) {
      throw new InvalidName();
    }
    if (!password) {
      throw new InvalidPassword();
    }

    const id = generateId();

    const userDatabase = new UserDatabase();
    await userDatabase.create({
      id,
      name,
      email,
      password,
    });
  }
}
