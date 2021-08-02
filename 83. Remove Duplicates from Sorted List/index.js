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
 var deleteDuplicates = function(head) {
    let current = head;
    while(current) {
        if(current.next && current.next.val === current.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    
    return head;
};

/**
 * Time Complexity = O(n)
 * where n is the number of elements in the linked list.
 */
