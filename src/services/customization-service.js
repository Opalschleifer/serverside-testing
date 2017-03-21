const CONFIG = require('../../config.json');
const CLIENT = CONFIG.client;
const HOST = CONFIG.host;
const SECURE = CONFIG.secure;
const createTargetClient = require("@adobe/target-node-client");
const targetClient = createTargetClient({
  client: CLIENT,
  host: HOST,
  secure: SECURE
});

function getCustomization(data, req, res) {
  return targetClient.execute(data, req, res)
    .then(response => {
      console.log('Target request succeeded', response);

      return {
        content: response.content
      };
    })
    .catch(error => {
      console.log('Target request failed', error);

      return null;
    });
}

module.exports = getCustomization;
