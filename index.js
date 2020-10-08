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
    // code here
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
