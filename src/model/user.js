import { sequelize } from '../database/sequelize.js';
import {DataTypes} from 'sequelize';

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
});

User.sync();

export default User;
