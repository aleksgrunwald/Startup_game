const _ = require("lodash");
const model = require("./model");
const cardLottery = require("./card_lottery");

const paramsDefaults = {
  param1: 100,
  param2: 200,
  cash: 300
};

let params;
let currentCard;

const startNewGame = () => {
  params = _.clone(paramsDefaults);
  return { message: "Game started" };
};

const getParams = () => params;

const getCard = () => {
  currentCard = cardLottery.newCard(params);
  return currentCard;
};

const sendDecision = decision => {
  params = model.tick(params, decision, currentCard);
  return { message: "Params changed" };
};

const endGame = () => ({
  score: params.param1 + params.param2 + params.cash
});

startNewGame();

module.exports = {
  startNewGame,
  getParams,
  getCard,
  sendDecision,
  endGame
};
