const scheduleResolve = (ms, value) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms, value);
  });
};

const scheduleReject = (ms, value) => {
  return new Promise((resolve, reject) => {
    setTimeout(reject, ms, value);
  });
};

module.exports = {
  scheduleResolve,
  scheduleReject
};
