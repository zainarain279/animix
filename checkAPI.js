const { log } = require("./utils"); // Adjust the path as necessary
const settings = require("./config/config");

// JSON data embedded directly
const urlChecking = {
  clayton: "https://tonclayton.fun/api/aT83M535-617h-5deb-a17b-6a335a67ffd5",
  pineye: "https://api2.pineye.io/api",
  memex: "https://memex-preorder.memecore.com",
  pocketfi: "https://bot.pocketfi.org",
  kat: "https://apiii.katknight.io/api",
  pinai: "https://prod-api.pinai.tech",
  hivera: "https://app.hivera.org",
  midas: "https://api-tg-app.midas.app/api",
  animix: "https://pro-api.animix.tech",
  copyright:
    "If the api changes, please contact the Airdrop Hunter Super Speed tele team (https://t.me/AirdropScript6) for more information and updates!| Have any issuess, please contact: https://t.me/AirdropScript6",
};

async function checkBaseUrl() {
  console.log("Checking api...".blue);
  if (settings.ADVANCED_ANTI_DETECTION) {
    const result = getBaseApi(urlChecking);
    if (result.endpoint) {
      log("No change in api!", "success");
      return result;
    }
  } else {
    return {
      endpoint: settings.BASE_URL,
      message: urlChecking.copyright,
    };
  }
}

function getBaseApi(data) {
  if (data?.animix) {
    return { endpoint: data.animix, message: data.copyright };
  } else {
    return {
      endpoint: null,
      message: data.copyright,
    };
  }
}

module.exports = { checkBaseUrl };