import { Service } from "typedi";
import { UserRetriever } from "../application/implementation/UserRetriever";
import { IUserController } from "./IUserController";
import Pedidos from '../../database/models/Pedidos';

@Service()
export class UserController implements IUserController {

  constructor(private readonly userRetriever: UserRetriever) { }

  public async GetUsers(): Promise<Pedidos[]> {
    return await this.userRetriever.GetUsers();
  }

}