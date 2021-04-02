# OpenSubtitles Bot
Serverless Telegram Node.js bot for searching subtitles from OpenSubtitles.

![Bot](https://i.imgur.com/zkHn3eg.png)

# Features
* /search [name, filename or imdbid] - Search subtitles
* /commands - Command list
* /help - Help
* /upload - Link to upload subtitles
* /about - About

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Preview
[OpenSubtitlesBot](https://t.me/opensubtitlesbot)

# Running
### 1. OpenSubtitles
````
# Create an OpenSubtitles account
Create an OpenSubtitles account on https://opensubtitles.org/

# UserAgent
Request your own UserAgent https://trac.opensubtitles.org/projects/opensubtitles/wiki/DevReadFirst#Howtorequestanewuseragent. Only for testing and developing purposes you can use special user agent "TemporaryUserAgent". Never use this UA as default/public/in production code, we periodically change this and your APP will stop work! Also don't abuse usage of this test user agent

# Credentials
Save your credentials from OpenSubtitles
````

### 2. Telegram
````
# Create an Telegram bot
Find @BotFather on Telegram, type /newbot and follow the instructions

# Credentials
Save your token from @BotFather
````

### 3. Vercel Deploy
````
# Account
Create an Vercel account on https://vercel.com/

# Install Vercel CLI
npm install -g vercel

# Vercel CLI login
vercel login

# Deploy
vercel

# Set Vercel environment variables
TELEGRAM_TOKEN
OPENSUBTITLES_USERAGENT
OPENSUBTITLES_USERNAME
OPENSUBTITLES_PASSWORD
````

### 4. Setting up the Telegram webhook
````
curl --location --request POST https://api.telegram.org/bot<YOUR-TELEGRAM-TOKEN>/setWebhook --header 'Content-type: application/json' --data '{"url": "https://project-name.username.vercel.app/api/webhook"}'
````

# About

### Authors
* [xxgicoxx](https://github.com/xxgicoxx/) - Giovani de Oliveira

### Acknowledgments
* [FlatIcon](https://www.flaticon.com/) - Icon
* [OpenSubtitles](https://www.opensubtitles.org/) - Subtitles