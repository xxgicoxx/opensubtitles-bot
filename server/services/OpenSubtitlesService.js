const arg = require('arg');
const Opensubtitlesapi = require('opensubtitles-api');

const { openSubtitlesConfig } = require('../configs');

class OpenSubtitlesService {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace('/search ', '');
  }

  async search() {
    try {
      const opensubtitles = new Opensubtitlesapi(openSubtitlesConfig);

      const args = arg({
        '--extensions': [String],
        '--season': Number,
        '--episode': Number,
        '--language': String,

        '-x': '--extensions',
        '-s': '--season',
        '-e': '--episode',
        '-l': '--language',
      }, {
        argv: this.text.split(' '),
      });

      const title = args._.join(' ');

      const response = await opensubtitles.search({
        [title.startsWith('tt') ? 'imdbid' : 'query']: title,
        season: args['--season'],
        episode: args['--episode'],
        extensions: args['--extensions'],
        sublanguageid: args['--language'],
      });

      const subtitles = response == null ? null : Object.values(response);

      if (!subtitles || !subtitles.length) {
        await this.bot.sendMessage(this.id, 'Subtitle not found');
      } else {
        const keyboard = [];

        subtitles.forEach((e) => {
          keyboard.push([{ text: `[${e.lang}] - ${e.url}` }]);
        });

        await this.bot.sendMessage(this.id, 'Select subtitle', {
          reply_markup: {
            keyboard,
            remove_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, 'Error, try again later');
    }
  }
}

module.exports = OpenSubtitlesService;
