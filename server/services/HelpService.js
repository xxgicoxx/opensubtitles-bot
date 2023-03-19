const { constants } = require('../utils');

class HelpService {
  constructor(bot, id) {
    this.bot = bot;
    this.id = id;
  }

  async help() {
    try {
      const commands = [
        { command: '/search <b>{name, filename or imdbid}</b>', description: 'Search subtitles' },
        { command: '/upload', description: 'Link to upload subtitles' },
        { command: '/about', description: 'About' },
        { command: '/help', description: 'Help' },
      ];
      let message = '';

      message += constants.MESSAGE_HELP;
      message += commands.map((command) => `${command.command} - ${command.description}`).join('\n');

      await this.bot.sendMessage(this.id, message, { parse_mode: constants.PARSE_MODE });
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, constants.MESSAGE_ERROR_TRY_AGAIN);
    }
  }

  async upload() {
    try {
      await this.bot.sendMessage(this.id, constants.MESSAGE_UPLOAD, {
        parse_mode: constants.PARSE_MODE,
      });
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, constants.MESSAGE_ERROR_TRY_AGAIN);
    }
  }

  async about() {
    try {
      await this.bot.sendMessage(this.id, constants.MESSAGE_ABOUT, {
        parse_mode: constants.PARSE_MODE,
      });
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, constants.MESSAGE_ERROR_TRY_AGAIN);
    }
  }
}

module.exports = HelpService;
