import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import nodeMailer from "nodemailer";

export class MailTrapMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodeMailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "78065ea76fa9f4",
        pass: "403408f484b9d4",
      },
    });
  }

  async sendMail(Message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: Message.to.name,
        address: Message.to.email,
      },
      from: {
        name: Message.from.name,
        address: Message.from.email,
      },
      subject: Message.subject,
      html: Message.body,
    });
  }
}
