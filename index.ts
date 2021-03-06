import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ],
})

client.on('ready', () => {
  console.log('The bot is ready!')
})

client.on('messageCreate', (message) => {
  let messageDiscord = message.content.toLowerCase();

  if (messageDiscord == "hello") {
    message.reply({
      content: 'Hello World 🌎',
    })
  }
})

client.login(process.env.TOKEN)