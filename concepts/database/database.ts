import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('llevaloo_pruebas', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres'
});
