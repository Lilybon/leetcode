/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head == null) return null;

    // imaginary node which target for:
    // 1.return the node.next
    // 2.easy to handle transfer link list relation
    var node = new ListNode(null);

    node.next = head;
    var prevNode = node;
    var currNode = head;

    while(currNode != null){
        if(currNode.val === val) prevNode.next = currNode.next; // trasfer relation
        else prevNode = currNode; // do nothing
        currNode = currNode.next; // next iteration
    }
    return node.next;
}
