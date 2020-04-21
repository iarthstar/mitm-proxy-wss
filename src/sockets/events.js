const utils = require('../utils');
const M = require('./../__mocks__/hex');

const onClose = (code, reason) => {
  utils.log("Client disconnected:", code, reason);
};

exports.onConnection = (ws) => {
  utils.log("Client connected");
  ws.on("close", onClose);
};

exports.forEachClient = (client) => {
  client.send(M.hex());
};