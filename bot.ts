import TelegramBot from "node-telegram-bot-api";

if (!process.env.TG_BOT_TOKEN) throw new Error("Missing bot token")

const bot = new TelegramBot(process.env.TG_BOT_TOKEN, { polling: true });

export default bot