const Slack = require('slack')
const token = require('./config').SLACK_BOT_TOKEN

const bot = new Slack({token})


bot.chat.postMessage({channel:"shell", text:"Hello"})