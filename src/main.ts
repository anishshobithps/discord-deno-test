import "@std/dotenv/load";
import { SapphireClient } from "@sapphire/framework";
import { GatewayIntentBits } from "discord.js";

const client = new SapphireClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  caseInsensitiveCommands: true,
  defaultPrefix: "b!",
  loadMessageCommandListeners: true,
});

client.login(Deno.env.get("DISCORD_TOKEN"));
