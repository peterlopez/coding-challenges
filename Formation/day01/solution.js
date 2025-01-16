/*
 * You may assume the node class is:
 * class LLNode {
 *   constructor(value, next = null) {
 *     this.value = value;
 *     this.next = next;
 *   }
 * }
 */
function deleteMiddleNode(head) {
        // use fast and slow pointers
        // fast increases by 2, slow increases by 1

        if (head.next === null) {
            return head;
        }

        let fast = head.next;
        let slow = head;

        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;
        return head;
}

