const amqp = require('amqplib/callback_api');
require('dotenv').config();

let channel = null;

const connectRabbitMQ = () => {
    return new Promise((resolve, reject) => {
        amqp.connect(process.env.RABBITMQ_CONFIG_STRING, (err, connection) => {
            if (err) {
                console.log("[ERROR IN CONNECTING TO RABBITMQ]:", err);
                return reject(err);
            }
            console.log("[CONNECTED TO RABBITMQ]");
            connection.createChannel((err, ch) => {
                if (err) {
                    console.log("[ERROR IN CREATING CHANNEL]:", err);
                    return reject(err);
                }
                channel = ch;
                console.log("[CREATED CHANNEL]:", channel);
                resolve(channel);
            });
        });
    });
};


module.exports = {
    connectRabbitMQ
}