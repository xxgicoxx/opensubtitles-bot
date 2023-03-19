module.exports = Object.freeze({
  MESSAGE_HELP: '<b>I can help you with many functions.\n\nYou can control me by sending these commands:\n\n</b>',
  MESSAGE_UPLOAD: '<b>https://www.opensubtitles.org/upload</b>',
  MESSAGE_ABOUT: '<b>Subtitles service powered by https://www.opensubtitles.org</b>',
  MESSAGE_ERROR_TRY_AGAIN: 'Error, try again later',
  MESSAGE_SELECT_SUBTITLE: 'Select subtitle',
  MESSAGE_SUBTITLE_NOT_FOUND: 'Subtitle not found',

  COMMAND_SEARCH: '/search',
  COMMAND_START: '/start',
  COMMAND_COMMANDS: '/commands',
  COMMAND_HELP: '/help',
  COMMAND_UPLOAD: '/upload',
  COMMAND_ABOUT: '/about',

  COMMAND_SEARCH_REGEX: /\/search (.+)/,

  ON_MESSAGE: 'message',

  PARSE_MODE: 'html',
});
