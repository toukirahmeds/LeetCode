/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head;
  if (list1 && list2) {
    if (list1.val <= list2.val) {
      head = list1;
      list1 = list1.next;
    } else {
      head = list2;
      list2 = list2.next;
    }
  } else if (list1 && !list2) {
    head = list1;
    list1 = list1.next;
  } else if (!list1 && list2) {
    head = list2;
    list2 = list2.next;
  } else {
    return list1;
  }

  let current = head;

  while (list1 || list2) {
    if (list1 && list2) {
      if (list1.val <= list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
    } else if (list1 && !list2) {
      current.next = list1;
      list1 = list1.next;
    } else if (!list1 && list2) {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  return head;
};

/**
 * Time Complexity = O(n), where n is the sum of total number of items in both linked lists.
 */
