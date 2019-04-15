/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node1 = l1, node2 = l2, carry = 0, dummyHead = new ListNode(null), newList = dummyHead;
    while(node1 || node2){
        let n1 = node1 ? node1.val : 0;
        let n2 = node2 ? node2.val : 0;
        let sum = n1 + n2 + carry;
        newList.next  = new ListNode(sum % 10);
        // calc the next carry value after node pushed.
        carry = Math.floor(sum / 10);

        node1 = node1 ? node1.next : node1;
        node2 = node2 ? node2.next : node2;
        newList = newList.next;
    }
    // if both lists travel to end and the final sum digit surpass.
    if(carry > 0) newList.next = new ListNode(carry);
    return dummyHead.next;
};
