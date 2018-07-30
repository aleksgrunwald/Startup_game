const _ = require("lodash");
const cards = require("./cards");

const paramsDefaults = {
  param1: 100,
  param2: 200,
  cash: 3000
};

let params = _.clone(paramsDefaults);

const startNewGame = () => {
  params = _.clone(paramsDefaults);
  return { status: "ok" };
};

const getParams = () => params;

const getCard = () => cards[0];

module.exports = {
  startNewGame,
  getParams,
  getCard
};
