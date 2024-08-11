const { getChannel } = require('./rabbitmq');

const publishMessage = async (queue, message) => {
  const channel = getChannel();
  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(message), { persistent: true });
  console.log(`Message sent to queue ${queue}: ${message}`);
};

module.exports = { publishMessage };
