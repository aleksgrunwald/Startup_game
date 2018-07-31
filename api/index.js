const _ = require("lodash");
const cards = require("./cards");

const paramsDefaults = {
  param1: 100,
  param2: 200,
  cash: 3000
};

let params;

const startNewGame = () => {
  params = _.clone(paramsDefaults);
  return { status: "ok" };
};

const getParams = () => params;

const getCard = () => cards[Math.floor(Math.random() * cards.length)];

const sendDecision = bool => {
  if (bool) {
    params.param1 = Math.floor(Math.random() * 1000);
  } else {
    params.cash += Math.floor((Math.random() - 0.5) * 200);
  }
};

const endGame = () => ({
  score: params.param1 + params.param2 + params.cash
});

module.exports = {
  startNewGame,
  getParams,
  getCard,
  sendDecision,
  endGame
};
