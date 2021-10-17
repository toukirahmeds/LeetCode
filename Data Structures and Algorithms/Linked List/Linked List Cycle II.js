/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    const visitedList = [];
    let current = head;
    while (current) {
        const indexOfElem = visitedList.indexOf(current);
        if (indexOfElem > -1) {
            return current;
        }

        visitedList.push(current);
        current = current.next;
    }

    return null;
};
