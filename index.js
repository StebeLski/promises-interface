class CustomPromise extends Promise {
  static resolve(value) {
    return new Promise((resolve) => {
      resolve(value);
    });
  }

  static reject(value) {
    return new Promise((resolve, reject) => {
      reject(value);
    });
  }

  static race(iterable) {
    if (!Array.isArray(iterable)) {
      throw new TypeError('CustomPromise.race; input must be an array');
    }
    return new Promise((resolve, reject) => {
      iterable.forEach((p) => {
        Promise.resolve(p).then(resolve, reject);
      });
    });
  }

  static all(iterable) {
    if (!Array.isArray(iterable)) {
      throw new TypeError('CustomPromise.all; input must be an array');
    }

    return new Promise((resolve, reject) => {
      const res = [];
      let counter = iterable.length;
      function checkIfDone() {
        counter--;
        if (counter === 0) {
          resolve(res);
        }
      }

      iterable.forEach((p, i) => {
        Promise.resolve(p).then((value) => {
          res[i] = value;
          checkIfDone();
        }, reject);
      });
    });
  }

  static any(iterable) {
    if (!Array.isArray(iterable)) {
      throw new TypeError('CustomPromise.any; input must be an array');
    }

    return new Promise((resolve, reject) => {
      const res = [];
      let counter = iterable.length;
      function checkIfDone() {
        counter--;
        if (counter === 0) {
          reject(res);
        }
      }

      iterable.forEach((p, i) => {
        Promise.resolve(p).then(resolve, (value) =>  {
          res[i] = value;
          checkIfDone();
        });
      });
    });
  }


  // [{ status: 'fulfilled', value: v }, { status: 'rejected', reason: error }].

  static allSettled(iterable) {
    if (!Array.isArray(iterable)) {
      throw new TypeError('CustomPromise.allSettled; input must be an array');
    }

    return new Promise((resolve, reject) => {
      const res = [];
      let counter = iterable.length;
      function checkIfDone() {
        counter--;
        if (counter === 0) {
          resolve(res);
        }
      }

      iterable.forEach((p, i) => {
        Promise.resolve(p).then((value) => {
        res[i] = {status: 'fulfilled', value}}, 
        reason => {res[i] = {status: 'rejected', reason}}).then(checkIfDone);
      });
    });
  }
}

module.exports = CustomPromise;
