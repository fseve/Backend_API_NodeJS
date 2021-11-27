import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import indexRoutes from './routes/IndexRoutes';
import userRoutes from './user/infrastructure/UserRoutes';
import { sequelize } from './database/database';


class Server {

  constructor() {
    this.applicationContext = express();
    this.Config();
    this.Routes();
  }

  public applicationContext: express.Application;

  public Config() {

    // Server settings.
    this.applicationContext.set(
      'port', process.env.PORT || 3000);

    // Server Middlewares.
    this.applicationContext.use(morgan('dev'));
    this.applicationContext.use(express.json());
    this.applicationContext.use(express.urlencoded({ extended: false }));
    this.applicationContext.use(helmet());
    this.applicationContext.use(compression());
    this.applicationContext.use(cors());
  }

  public Routes() {
    this.applicationContext.use(indexRoutes);
    this.applicationContext.use('/api/user', userRoutes);
  }

  public Start() {
    this.applicationContext.listen(
      this.applicationContext.get('port'), () => {
        console.log('Server on port', this.applicationContext.get('port'));
        this.ConnectDatabase();
      });
  }

  public ConnectDatabase() {
    sequelize.sync({ force: false })
      .then(() => {
        console.log('Data base is connect!!!');
      })
      .catch((error) => {
        console.log('There is a error with the data base connect', error);
    });
  }

}

const server = new Server();
server.Start();
