import { Message, Metadata } from "node-telegram-bot-api";
import bot from "../../bot";
import { generate256BitNonce } from "./register";

const rgr: Record<number, string> = {};

function handleMessage(message: Message, metadata: Metadata) {
  const chatId = message.chat.id;

  if (!rgr[chatId]) {
    const nonce = generate256BitNonce();
    rgr[chatId] = nonce;
    bot.sendMessage(chatId, `Nonce generated: ${nonce}`);
  } else {
    bot.sendMessage(chatId, `Nonce already present: ${rgr[chatId]}`);
  }
}

export default handleMessage;
