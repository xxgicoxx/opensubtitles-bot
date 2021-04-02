class MessageService {
  constructor(bot, id) {
    this.bot = bot;
    this.id = id;
  }

  async commands() {
    try {
      let message = 'I can help you search subtitles.\n\nYou can control me by sending these commands:\n\n';

      message += '<i>/search {name, filename or imdbid} - search subtitles</i>\n';
      message += '<i>/commands - command list</i>\n';
      message += '<i>/help - help</i>\n';
      message += '<i>/upload - link to upload subtitles</i>\n';
      message += '<i>/about - about</i>\n';

      await this.bot.sendMessage(this.id, message, { parse_mode: 'HTML' });
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, 'Error, try again later');
    }
  }

  async help() {
    try {
      let message = '<b>Query examples:</b>\n';

      message += '<i>/search How I Met Your Mother S01E02</i>\n';
      message += '<i>Output: subtitle of How I Met Your Mother season 01 episode 02</i>\n\n';

      message += '<i>/search Harry Potter and the Goblet of Fire</i>\n';
      message += '<i>Output: subtitle of Harry Potter and the Goblet of Fire</i>\n\n';

      message += '<i>/search Fight Club -x srt</i>\n';
      message += '<i>Output: subtitle of Fight Club movie with .srt extension</i>\n\n';

      message += '<i>/search Breaking Bad -s 01 -e 02 -x sub</i>\n';
      message += '<i>Output: subtitle of Breaking Bad season 01 episode 02 with .sub extension</i>\n\n';

      message += '<i>/search tt0903747 -s 01 -e 02 -x srt -l pob</i>\n';
      message += '<i>Output: subtitle of imdbid tt0903747 (Breaking Bad) season 01 episode 02 with .srt extension in Portuguese (BR)</i>\n\n';

      message += '<b>Accepted extensions:</b>\n';

      message += '<i>srt</i>\n';
      message += '<i>sub</i>\n';
      message += '<i>smi</i>\n';
      message += '<i>txt</i>\n';
      message += '<i>ssa</i>\n';
      message += '<i>ass</i>\n';
      message += '<i>mpl</i>\n\n';

      message += '<b>Accepted filters:</b>\n';

      message += '<i>-s (season)</i>\n';
      message += '<i>-e (episode)</i>\n';
      message += '<i>-x (extensions)</i>\n';
      message += '<i>-l (language)</i>\n';

      await this.bot.sendMessage(this.id, message, { parse_mode: 'HTML' });
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, 'Error, try again later');
    }
  }

  async upload() {
    try {
      const message = '<b>https://www.opensubtitles.org/upload</b>';

      await this.bot.sendMessage(this.id, message, { parse_mode: 'HTML' });
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, 'Error, try again later');
    }
  }

  async about() {
    try {
      const message = '<b>Subtitles service powered by https://www.opensubtitles.org</b>';

      await this.bot.sendMessage(this.id, message, { parse_mode: 'HTML' });
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, 'Error, try again later');
    }
  }
}

module.exports = MessageService;
