class Node {
  constructor(val, pointer) {
    this.val = val;
    this.pointer = pointer;
  }
}

const node4 = new Node(4, null);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);

let prev = null;
let next = null;
let temp = node1;

while (temp != null) {
  //console.log(temp.val, temp.pointer)
  next = temp.pointer;
  temp.pointer = prev;
  prev = temp;
  temp = next;
  console.log(prev.val, prev.pointer);
}

// TC - O(n)
// SC - O(1)

// before reverse
//   1 Node {val: 2,pointer: Node { val: 3, pointer: Node { val: 4, pointer: null } }}
//   2 Node { val: 3, pointer: Node { val: 4, pointer: null } }
//   3 Node { val: 4, pointer: null }
//   4 null

// aftere reverse
// 1 null
// 2 Node { val: 1, pointer: null }
// 3 Node { val: 2, pointer: Node { val: 1, pointer: null } }
// 4 Node {val: 3, pointer: Node { val: 2, pointer: Node { val: 1, pointer: null } }}
