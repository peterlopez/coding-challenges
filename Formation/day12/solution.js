class LLNode {
  constructor(value, next = null, sublist = null) {
    this.value = value;
    this.next = next; // the next value in the current list
    this.sublist = sublist; // another list
  }
}

function flattenSublist(head) {
  const output = [];

  while (head) {
    output.push(head.value);

    let sublistNode = head.sublist;
    while (sublistNode) {
      output.push(sublistNode.value);
      sublistNode = sublistNode.next;
    }

    head = head.next;
  }

  return output;
}

const head = new LLNode(
  1,
  new LLNode(2, new LLNode(3, new LLNode(4, new LLNode(5))))
);
head.next.next.sublist = new LLNode(6, new LLNode(7, new LLNode(8)));

console.assert(
  JSON.stringify(flattenSublist(head)) ===
    JSON.stringify([1, 2, 3, 6, 7, 8, 4, 5])
);
console.assert(JSON.stringify(flattenSublist(null)) === JSON.stringify([]));
console.assert(
  JSON.stringify(flattenSublist(new LLNode(42))) === JSON.stringify([42])
);
