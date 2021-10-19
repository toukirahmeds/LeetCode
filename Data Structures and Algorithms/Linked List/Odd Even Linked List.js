/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    let mp = head, prev, current;
    if (mp) {
        prev = mp.next;
    }
    if (!prev || !prev.next) {
        return head;
    }

    current = prev.next;

    let mIndex = 1, currentIndex = 3;
    while (prev && current) {
        if (currentIndex > mIndex && currentIndex % 2 !== 0) {
            prev.next = current.next;
            current.next = mp.next;
            mp.next = current;
            mp = mp.next;
            current = prev.next;
            mpIndex = currentIndex;
            currentIndex++;
        } else {
            prev = current;
            current = current.next;
            currentIndex++;
        }
    }

    return head;
};
