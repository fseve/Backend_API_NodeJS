import { Router } from 'express';
import UserApi from './UserApi';
import Container from 'typedi';
// import { UserController } from '../interfaceAdapters/UserController';
// import { UserRetriever } from '../application/implementation/UserRetriever';
// import { UserContext } from '../domain/UserContext';

 class UserRoutes {

  constructor() {
    this.router = Router();
    this.Routes();
  }

  public router: Router;

  public Routes() {

    const userApi = Container.get(UserApi);

    // const userContext = new UserContext();
    // const userRetriever = new UserRetriever(userContext);
    // const userController = new UserController(userRetriever);
    // const userApi = new UserApi(userController);

    this.router.post('/', async (req, res) => userApi.CreateUser(req, res));
    this.router.get('/', async (req, res) => userApi.GetUsers(req, res));
    this.router.get('/:url', async (req, res) => userApi.GetUserById(req, res));
    this.router.put('/:url', async (req, res) => userApi.UpdateUserById(req, res));
    this.router.delete('/:url', async (req, res) => userApi.DeleteUserById(req, res));

  }

}

const userRouter = new UserRoutes();
userRouter.Routes();

export default userRouter.router;
