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
    // code here
  }

  static any(iterable) {
    // code here
  }

  static allSettled(iterable) {
    // code here
  }
}

module.exports = CustomPromise;
