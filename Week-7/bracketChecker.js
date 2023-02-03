const validBracket = (str) => {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    let x = str[i];
    if (x == "(" || x == "[" || x == "{") {
      arr.push(x);
      continue;
    }
    if (arr.length == 0) {
      return false;
    }

    let check;
    switch (x) {
      case ")":
        check = arr.pop();
        if (check == "{" || check == "[") {
          return false;
        }
        break;

      case "}":
        check = arr.pop();
        if (check == "(" || check == "[") {
          return false;
        }
        break;

      case "]":
        check = arr.pop();
        if (check == "(" || check == "{") {
          return false;
        }
        break;
    }
  }
  return arr.length == 0;
};

const s = "[()]{}{()()}";
console.log(validBracket(s));

//TC: O(N)
//SC: O(N)
