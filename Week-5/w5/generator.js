async function* task() {
  const task = await doTask();
  yield task;
  console.log(task);

  const task2 = await doTask2();
  yield task2;
  console.log(task2);

  const task3 = await doTask3();
  yield task3;
  console.log(task3);

  return task3;
}
const doTask = () => {
  return "hello";
};

const doTask2 = () => {
  return "world";
};

const doTask3 = () => {
  return 77;
};
const it = task();

it.next().then((value) => console.log(value)); // { value: "hello", done: false }
it.next().then((value) => console.log(value)); // { value: "world", done: false }
it.next().then((value) => console.log(value)); // { value: 77, done: false }
it.next().then((value) => console.log(value)); // it return { value: 77, done: true }
