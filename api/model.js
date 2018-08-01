const tick = (params, decision, card) => {
  if (decision) {
    params.param1 += Math.floor((Math.random() - 0.5) * 200);
    params.param2 += Math.floor((Math.random() - 0.5) * 200);
    params.cash += Math.floor((Math.random() - 0.5) * 200);
  } else {
    params.param1 += Math.floor((Math.random() - 0.5) * 200);
    params.param2 += Math.floor((Math.random() - 0.5) * 200);
    params.cash += Math.floor((Math.random() - 0.5) * 200);
  }
  return params;
};

module.exports = {
  tick
};
