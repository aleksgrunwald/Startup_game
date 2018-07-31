const tick = (params, decision, card) => {
  if (decision) {
    params.param1 = Math.floor(Math.random() * 1000);
    params.cash += card.cashChange;
  } else {
    params.cash += Math.floor((Math.random() - 0.5) * 200);
  }
};

module.exports = {
  tick
};
