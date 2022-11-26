function createStack() {
  const items = [];   // item is now accessed only in createStack
  return {
    push(item) {
      items.push(item); 
    },
    pop() {
      return items.pop();
    },
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // => 5
console.log(stack.items);
