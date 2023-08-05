import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IMailProvider } from "../../providers/IMailProvider";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error(`E-mail already exists`);
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        email: user.email,
        name: user.name,
      },
      from: {
        email: "Equipe@meuapp.com",
        name: "Equipe do meu app",
      },
      body: "<p>Você já pode fazer login em nossa plataforma.</p>",
      subject: "Bem vindo!",
    });
  }
}
