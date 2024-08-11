const fastify = require('fastify')({
    logger: true
});
const cors = require("@fastify/cors");
const { routes } = require('../src/routes/primaryRoutes')
require('dotenv').config();
const { syncModels } = require("../src/utilities/syncModels");
const {generateJwtSecret} = require('../src/utilities/jwtSecretGenerator');
const { socketIOConnection } = require('../configurations/socketio');
const { connectRabbitMQ } = require('../configurations/rabbitMQgateway');

fastify.register(cors, { 
    origin: process.env.ALLOWED_CLIENT
});

const serverInit = async () => {

    routes.forEach((route) => {
        fastify.route(route);
    });

    
    syncModels();

    const jwtSecret = generateJwtSecret();
    console.log("Generated JWT secret:", jwtSecret);

    fastify.listen({ port: process.env.SERVER_PORT, host: process.env.SERVER_HOST}, function (err, address) {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        }
    });
    socketIOConnection();
    await connectRabbitMQ();
}

module.exports = {
    serverInit
}