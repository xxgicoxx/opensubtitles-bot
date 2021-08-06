const opensubtitles = {
  useragent: process.env.OPENSUBTITLES_USERAGENT || 'TemporaryUserAgent',
  username: process.env.OPENSUBTITLES_USERNAME || '',
  password: process.env.OPENSUBTITLES_PASSWORD || '',
  ssl: process.env.OPENSUBTITLES_SSL || true,
};

module.exports = opensubtitles;
