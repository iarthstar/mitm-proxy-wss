const dataHex = require('./data/hex').hex;

makeHexData = (hex, quantum = 4, offset = 16) => {
  const hexStr = hex.replace(/[ \n]/g, "");
  const len = parseInt((Math.random() * 256) / quantum) * quantum;
  const str = hexStr.slice(len, len + len);
  return str;
}

exports.hex = () => makeHexData(dataHex);