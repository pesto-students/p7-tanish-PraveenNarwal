//Given reducer method:
// memorize the value is exist in cache or not
function memoize(fn) {
  const cache = {};

  return (...args) => {
    const existValue = args.map((item) => item.toString() + ",").join("");
    const sum = args.reduce((acc, item) => fn(acc, item), 0);

    if (existValue in cache) {
      return cache[existValue];
    } else {
      cache[existValue] = sum;
      return sum;
    }

  };
}

function add(a, b) {
  return a + b;
}


// time function calculate the execution time
function time(fn) {
  console.time();
  fn();
  console.timeEnd();
}
const memoizeAdd = memoize(add);

time(() => memoizeAdd(100, 100));
time(() => memoizeAdd(100));
time(() => memoizeAdd(100, 200));
time(() => memoizeAdd(100, 100));
