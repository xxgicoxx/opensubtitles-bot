const { telegramConfig } = require('../configs');

const {
  HelpService,
  OpenSubtitlesService,
} = require('../services');

class MessageController {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace(telegramConfig.username, '');
  }

  async handle() {
    try {
      if (this.text === '/start' || this.text === '/commands') {
        const helpService = new HelpService(this.bot, this.id);

        await helpService.commands(this.bot, this.id);
      } else if (this.text === '/help') {
        const helpService = new HelpService(this.bot, this.id);

        await helpService.help(this.bot, this.id);
      } else if (this.text === '/upload') {
        const helpService = new HelpService(this.bot, this.id);

        await helpService.upload(this.bot, this.id);
      } else if (this.text === '/about') {
        const helpService = new HelpService(this.bot, this.id);

        await helpService.about(this.bot, this.id);
      } else if (/\/search (.+)/.test(this.text)) {
        const openSubtitlesService = new OpenSubtitlesService(this.bot, this.id, this.text);

        await openSubtitlesService.search(this.bot, this.id, this.text);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = MessageController;
