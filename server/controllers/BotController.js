const { telegramConfig } = require('../configs');
const { constants } = require('../utils');

const {
  HelpService,
  OpenSubtitlesService,
} = require('../services');

class BotController {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace(telegramConfig.username, '');
  }

  async handle() {
    try {
      if (constants.COMMAND_SEARCH_REGEX.test(this.text)) {
        const openSubtitlesService = new OpenSubtitlesService(this.bot, this.id, this.text);

        await openSubtitlesService.search(this.bot, this.id, this.text);

        return;
      }

      const helpService = new HelpService(this.bot, this.id);

      switch (this.text) {
        case constants.COMMAND_START:
        case constants.COMMAND_COMMANDS:
        case constants.COMMAND_HELP:
          await helpService.help(this.bot, this.id);

          break;
        case constants.COMMAND_UPLOAD:
          await helpService.upload(this.bot, this.id);

          break;
        case constants.COMMAND_ABOUT:
          await helpService.about(this.bot, this.id);

          break;
        default:
          break;
      }
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = BotController;
