/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const resultHeader = l1;
  let adder = 0,
    sum,
    prevL1;
  while (l1 && l2) {
    sum = l1.val + l2.val + adder;
    if (sum >= 10) {
      l1.val = sum - 10;
      adder = 1;
    } else {
      l1.val = sum;
      adder = 0;
    }

    if (!l1.next) {
      prevL1 = l1;
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1) {
    sum = l1.val + adder;
    if (sum >= 10) {
      l1.val = sum - 10;
      adder = 1;
    } else {
      l1.val = sum;
      adder = 0;
    }

    if (!l1.next) {
      prevL1 = l1;
    }
    l1 = l1.next;
  }

  while (l2) {
    sum = l2.val + adder;
    if (sum >= 10) {
      prevL1.next = {
        val: sum - 10,
        next: null,
      };
      adder = 1;
    } else {
      prevL1.next = {
        val: sum,
        next: null,
      };
      adder = 0;
    }
    prevL1 = prevL1.next;
    l2 = l2.next;
  }

  if (adder === 1) {
    prevL1.next = {
      val: 1,
      next: null,
    };
  }
  return resultHeader;
};

/**
 * Time Complexity = O(n)
 */
