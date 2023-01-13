class ListNode {
    constructor(value = null, pointer = null) {
      this.value = value;
      this.pointer = pointer;
    }
  }
  
  function loopfind (head, a) {
    let currentHead = head;
    let len = 1;
  
    while (currentHead.pointer) {
      currentHead = currentHead.pointer;
      len++;
    }
    if (a < 1 || a > len) {
      return false;
    } else {
      return true;
    }
  };
  const node5 = new ListNode(7);
  const node4 = new ListNode(5, node5);
  const node3 = new ListNode(4, node4);
  const node2 = new ListNode(3, node3);
  const node1 = new ListNode(2, node2);
  
  console.log(loopfind(node1, 2));
  
  //Time complexity: O(N)
  //Space complexity: O(1)