class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function treeHeight(root) {
  if (!root) return 0;

  const leftHeight = treeHeight(root.left);
  const rightHeight = treeHeight(root.right);

  return 1 + Math.max(leftHeight, rightHeight);
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);
console.assert(treeHeight(root) == 3);

const root2 = new TreeNode(1);
console.assert(treeHeight(root2) == 1);

const root3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.assert(treeHeight(root3) == 2);

const root4 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3)
);
console.assert(treeHeight(root4) == 3);

const root5 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4, new TreeNode(8)), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);
console.assert(treeHeight(root5) == 4);

const root6 = new TreeNode(
  1,
  null,
  new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4)))
);
console.assert(treeHeight(root6) == 4);
