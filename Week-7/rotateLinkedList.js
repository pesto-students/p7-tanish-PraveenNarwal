let head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function rotate(k) {
  if (k == 0) return;

  let current = head;
  let count = 1;
  while (count < k && current != null) {
    current = current.next;
    count++;
  }

  if (current == null) return;
  let kthNode = current;
  while (current.next != null) current = current.next;
  current.next = head;
  head = kthNode.next;
  kthNode.next = null;
}

function push(new_data) {
  let new_node = new Node(new_data);

  new_node.next = head;

  head = new_node;
}

function printList() {
  let temp = head;
  while (temp != null) {
    console.log(temp.data + " ");
    temp = temp.next;
  }

}

for (i = 60; i >= 10; i -= 10) push(i);

console.log("before ");
printList();

rotate(4);

console.log("after");
printList();

//TC: O(N)
//SC: O(1)