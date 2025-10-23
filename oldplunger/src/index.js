// If it is possible to put `www_static/bootloader`'s AOT patching AND shimming into Oldplunger instead of deferring to bootloader it would be better.

// Following Vencord's src/Vencord.ts

import { Logger } from "./utils/logger";
import * as Webpack from "./webpack";
import { initializePlugins, startPlugins } from "./plugins";

export { startPlugins } from "./plugins";

const logger = new Logger("Main");

async function init() {
  window.oldplunger = {};
  Webpack.init();
}

logger.log("Starting Oldplunger...");
initializePlugins();
startPlugins("Init");
init();
