
function reverseInGroupsOfK(head, k) {
	let fakeHead = new LLNode(0, head);
	let groupPrev = fakeHead;

	while (true) {
		const kNode = findK(groupPrev, k);
		if (!kNode) {
			break;
		}

		const groupNext = kNode.next;

		let prev = kNode.next;
		let cur = groupPrev.next;
		while (cur != groupNext) {
			const tmp = cur.next;
			cur.next = prev;
			prev = cur;
			cur = tmp;
		}

		const tmp = groupPrev.next;
		groupPrev.next = kNode;
		groupPrev = tmp;
	}

	return fakeHead.next;

	function findK(cur, k) {
		while (cur && k > 0) {
			cur = cur.next;
			k--;
		}
		return cur;
	}
}

class LLNode {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

function printLL(head) {
	let s = '';
	let node = head;
	while (node.next != null) {
		s += `${node.value} -> `;
		node = node.next;
	}
	s += node.value;
	console.log(s);
}

head = new LLNode(1, new LLNode(2, new LLNode(3, new LLNode(4, new LLNode(5)))))
printLL(head);
newHead = reverseInGroupsOfK(head, 2);
printLL(newHead);

