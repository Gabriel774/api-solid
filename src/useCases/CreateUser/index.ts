import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgressUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapProvider = new MailTrapMailProvider();
const postgressUsersRepository = new PostgressUsersRepository();
console.log('oi')
const createUserUseCase = new CreateUserUseCase(
  postgressUsersRepository,
  mailTrapProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
