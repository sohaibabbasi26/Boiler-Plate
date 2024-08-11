const { getChannel } = require('./rabbitmq');

const consumeMessages = async (queue, onMessage) => {
  const channel = getChannel();
  await channel.assertQueue(queue, { durable: true });
  channel.consume(queue, (msg) => {
    if (msg !== null) {
      onMessage(msg.content.toString());
      channel.ack(msg);
    }
  });
};

module.exports = { consumeMessages };
