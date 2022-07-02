import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("wallet", "root", "password", {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
});

export default sequelize;