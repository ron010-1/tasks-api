import {Sequelize} from 'sequelize';
import env from '../config/configureEnv.js';

export const sequelize = new Sequelize(env.POSTGRES_DB, env.POSTGRES_USER, env.POSTGRES_PASSWORD, {
    host: env.POSTGRES_HOST,
    dialect: 'postgres'
});

export async function connectionDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
