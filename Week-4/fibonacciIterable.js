const fibonacci = {
  [Symbol.iterator]() {
    let n = 5,
      i = 1;
    let old = 0,
      new1 = 0;
    return {
      next() {
        if (i++ <= n) {
          [old, new1] = [new1, old + new1 || 1]; //  there value will be switched
          return {
            value: old,
            done: false,
          };
        } else {
          return {
            done: true,  
          };
        }
      },
    };
  },
};

for (const el of fibonacci) {
  console.log(el);
}
