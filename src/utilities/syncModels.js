const {sequelize} = require('../../configurations/sequelizePgSQL')

sequelize.options.logging = console.log;

async function syncModels() {
    try {
        await sequelize.sync({ alter: true , force:false });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error('Error syncing models:', error);
    }
}

module.exports = {
    syncModels
}