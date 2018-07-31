const _ = require("lodash");
const cards = require("./cards");
const model = require("./model");

const paramsDefaults = {
  param1: 100,
  param2: 200,
  cash: 3000
};

let params;
let currentCard;

const startNewGame = () => {
  params = _.clone(paramsDefaults);
  return { message: "Game started" };
};

const getParams = () => params;

const getCard = () => {
  currentCard = cards[Math.floor(Math.random() * cards.length)];
  return currentCard;
};

const sendDecision = decision => {
  model.tick(params, decision, currentCard);
  return { message: "Params changed" };
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
