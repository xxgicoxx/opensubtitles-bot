# OpenSubtitles Bot
Serverless Telegram bot for searching subtitles from OpenSubtitles.

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
[@opensubtitlesbot](https://t.me/opensubtitlesbot)

# Running
### 1. Telegram
````
# Create an Telegram bot
Find @BotFather on Telegram, type /newbot and follow the instructions

# Credentials
Save your token from @BotFather
````

### 2. OpenSubtitles
````
# Create an OpenSubtitles account
Create an OpenSubtitles account on https://opensubtitles.com/

# API Key
You can obtain an api key in the API consumers (https://www.opensubtitles.com/consumers) section of your profile. Create a consumer object that will contain the required api key.

# Credentials
Save your credentials from OpenSubtitles
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
TELEGRAM_USERNAME
TELEGRAM_TOKEN
OPENSUBTITLES_USERAGENT
OPENSUBTITLES_USERNAME
OPENSUBTITLES_PASSWORD
````

### 4. Setting up the Telegram webhook
````
curl --location --request POST https://api.telegram.org/bot<YOUR-TELEGRAM-TOKEN>/setWebhook --header 'Content-type: application/json' --data '{"url": "https://project-name.username.vercel.app/api/webhook"}'
````

# Authors
* [xxgicoxx](https://github.com/xxgicoxx/)

# Acknowledgments
* [FlatIcon](https://www.flaticon.com/)
* [OpenSubtitles](https://www.opensubtitles.org/)