import { Service } from "typedi";
import { UserContext } from "../../domain/UserContext";
import { IUserRetriever } from "../interface/IUserRetriever";
import Pedidos from '../../../database/models/Pedidos';

@Service()
export class UserRetriever implements IUserRetriever {

  constructor(private readonly userContext: UserContext) { }

  public async GetUsers(): Promise<Pedidos[]> {
    return await this.userContext.GetUsers();
    // return new Promise<string>((resolve, reject) => {
    //   return resolve('Otra vez probando las rutas6');
    // });
  }

}


