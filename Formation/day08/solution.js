class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function tree2list(root, tail = null) {
  if (!root) return tail;

  if (root.right) {
    tail = tree2list(root.right, tail);
  }

  let head = root;
  head.right = tail;
  if (tail) {
    tail.left = head;
  }

  if (root.left) {
    head = tree2list(root.left, head);
  }

  return head;
}

const tree1 = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, new Node(6), new Node(7))
);

const tree2 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

const tree3 = new Node(
  1,
  null,
  new Node(2, null, new Node(3, null, new Node(4, null, new Node(5))))
);

const list1 = tree2list(tree1);
console.assert(
  list1.value === 4 &&
    list1.left === null &&
    list1.right.value === 2 &&
    list1.right.left.value === 4
);

const list2 = tree2list(tree2);
console.assert(
  list2.value === 5 &&
    list2.left === null &&
    list2.right.value === 4 &&
    list2.right.left.value === 5
);

const list3 = tree2list(tree3);
console.assert(
  list3.value === 1 &&
    list3.left === null &&
    list3.right.value === 2 &&
    list3.right.left.value === 1
);
