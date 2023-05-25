import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('tienda', 'postgres', 'gerson192', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;