const { DataTypes } = require('sequelize');
const {sequelize} = require('../../configurations/sequelizePgSQL');

const Client = sequelize.define('clients', {
    client_location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    client_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    account_user_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contact_no: {
        type: DataTypes.STRING,
        allowNull: false
    },
    approved: {
        type: DataTypes.BOOLEAN,
    },
    status: {
        type: DataTypes.ENUM('Active', 'In-Active'),
        defaultValue: 'Active',
    },
});

module.exports = Client