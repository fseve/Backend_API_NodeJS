import { Service } from "typedi";
import Pedidos from "../../database/models/Pedidos";

@Service()
export class UserContext {

  public async GetUsers(): Promise<Pedidos[]> {
    return Pedidos.findAll();
    // return new Promise<string>((resolve, reject) => {
    //   return resolve('ABCDEF');
    // });
  }

}