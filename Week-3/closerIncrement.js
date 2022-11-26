function createIncrement() {
    let count = 0;                              //step 2: we initialize the count value
    function increment() {                      
      count++;
    }
    let message = `Count is ${count}`;          //step 3: count is 0 here because we don't call the  function to increase the value and we didn't define any functionality to update the message
    function log() {                            //step 4: log function will print the message 'Count is 0'
      console.log(message);                     // Note : if we console the count it will print 3
    }
    return [increment, log];
  }
  const [increment, log] = createIncrement();   //step 1: It call the function
  increment();
  increment();
  increment();
  log();