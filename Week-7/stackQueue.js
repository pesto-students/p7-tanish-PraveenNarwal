// class Queue {
//   constructor(s1 = [], s2 = []) {
//     this.s1 = s1;
//     this.s2 = s2;
//   }

//   deq() {
//     if (this.s1.length) {
//       while (this.s1.length) {
//         this.s2.push(this.s1.pop());
//       }
//       this.s2.pop();
//       while (this.s2.length) {
//         this.s1.push(this.s2.pop());
//       }
//     }
//   }

//   enq(val) {
//     this.s1.push(val);
//   }
//   peek() {
//     console.log(this.s1[this.s1.length - 1]);
//   }
//   show() {
//     console.log(this.s1);
//   }
// }

// const q = new Queue();
// const input = [1, 2, 1, 3, 2, 1, 4, 2];
// for (let i = 0; i < input.length; i++) {
//   if (input[i] === 1) {
//     q.enq(input[i + 1]);
//     i++;
//   } else if (input[i] === 2) {
//     q.deq();
//   }
// }
// q.show();

// //enq
// //TC: O(1)
// //SC: O(1)

// //deq
// //TC: O(N)
// //SC: O(N)
