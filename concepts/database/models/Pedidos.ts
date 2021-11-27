import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

class Pedidos extends Model {}

Pedidos.init(
  {
    producto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    }
  },
  { sequelize, modelName: 'pedidos' },
);

export default Pedidos;
