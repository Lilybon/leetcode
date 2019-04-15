/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(null);
    dummyHead.next = head;
    let current = head, len = 0;
    while(current){
        len++;
        current = current.next;
    }
    let tgt = len - n;
    current = dummyHead;
    while(tgt){
        tgt--;
        current = current.next;
    }
    let delNode = current.next;
    current.next = delNode.next;
    delNode.next = null;
    return dummyHead.next;
};
