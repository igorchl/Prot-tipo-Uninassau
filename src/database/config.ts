import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('gestao_estoque', 'postgres', 'naruto10', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});

export default sequelize;
