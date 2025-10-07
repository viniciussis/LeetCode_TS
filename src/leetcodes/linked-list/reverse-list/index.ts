import { ListNode } from '../../../utils';

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;

  let prev_node: ListNode | null;
  let curr_node: ListNode | null;
  let next_node: ListNode | null;

  prev_node = null;
  curr_node = head;
  next_node = curr_node.next;

  while (next_node) {
    next_node = curr_node.next;
    curr_node.next = prev_node;
    prev_node = curr_node;
    next_node && (curr_node = next_node);
  }

  return prev_node;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2, node1);
let node3 = new ListNode(3, node2);
let node4 = new ListNode(4, node3);
let node5 = new ListNode(5, node4);

console.log(reverseList(node3));
console.log(reverseList(node5));
