//
// ────────────────────────────────────────────────────────── INIT APP ─────
//


// modules import
const WebSocket = require("ws");

const utils = require("./../utils");
const G = require('./../globals');

const onClose = (code, reason) => {
  utils.log("Client disconnected:", code, reason);
};

const onConnection = (ws) => {
  utils.log("Client connected");
  ws.on("close", onClose);
};

const forEachClient = (client) => {
  client.send(new Date().toISOString());
};

module.exports = async () => {
  G.WEBSOCKETS = new WebSocket.Server({ server: G.EXPRESS });

  G.WEBSOCKETS.on("connection", onConnection);

  setInterval(() => {
    G.WEBSOCKETS.clients.forEach(forEachClient);
  }, 10000);

};