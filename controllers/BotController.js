const { telegramConfig } = require('../configs');

const {
  MessageService,
  OpenSubtitlesService,
} = require('../services');

class MessageController {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace(telegramConfig.botuser, '');
  }

  async handle() {
    if (this.text === '/start' || this.text === '/commands') {
      const messageService = new MessageService(this.bot, this.id);

      await messageService.commands(this.bot, this.id);
    } else if (this.text === '/help') {
      const messageService = new MessageService(this.bot, this.id);

      await messageService.help(this.bot, this.id);
    } else if (this.text === '/upload') {
      const messageService = new MessageService(this.bot, this.id);

      await messageService.upload(this.bot, this.id);
    } else if (this.text === '/about') {
      const messageService = new MessageService(this.bot, this.id);

      await messageService.about(this.bot, this.id);
    } else if (/\/search (.+)/.test(this.text)) {
      const openSubtitlesService = new OpenSubtitlesService(this.bot, this.id, this.text);

      await openSubtitlesService.search(this.bot, this.id, this.text);
    }
  }
}

module.exports = MessageController;
