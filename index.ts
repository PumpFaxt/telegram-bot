import "dotenv/config"

import bot from "./bot";
import handleMessage from "./src/handlers/_index";

async function main() {
  bot.addListener("message", handleMessage);

  console.log(await bot.getMyCommands())
  console.log("Bot on");
}

main()