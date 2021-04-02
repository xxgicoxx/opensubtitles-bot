process.env.NTBA_FIX_319 = 1;

require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

const { telegramConfig } = require('../configs');
const { BotController } = require('../controllers');

module.exports = async (request, response) => {
  try {
    const { body } = request;

    if (body.message) {
      const { chat: { id }, text } = body.message;
      const bot = new TelegramBot(telegramConfig.token);
      const botController = new BotController(bot, id, text);

      await botController.handle();
    }
  } catch (error) {
    console.error(error);
  } finally {
    response.send();
  }
};
