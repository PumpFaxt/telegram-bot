import { Message, Metadata, SendMessageOptions } from "node-telegram-bot-api";
import bot from "../../bot";
import { generate256BitNonce } from "./register";

const rgr: Record<number, string> = {};

function handleMessage(message: Message, metadata: Metadata) {
  const chatId = message.chat.id;

  if (!rgr[chatId]) {
    const nonce = generate256BitNonce();
    rgr[chatId] = nonce;
    const url = `https://github.com/jriyyya`;
    const options: SendMessageOptions = {
      reply_markup: {
        inline_keyboard: [[{ text: "Connect Wallet", url: url }]]
      }
    };
    bot.sendMessage(chatId, `Nonce generated: ${nonce}\nClick the button below to open the website:`, options);
  } else {
    const url = `https://github.com/jriyyya`;
    const options: SendMessageOptions = {
      reply_markup: {
        inline_keyboard: [[{ text: "Connect Wallet", url: url }]]
      }
    };
    bot.sendMessage(chatId, `Nonce already present: ${rgr[chatId]}\nClick the button below to open the website:`, options);
  }
}

export default handleMessage;
