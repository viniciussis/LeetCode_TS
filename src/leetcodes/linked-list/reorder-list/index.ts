import { ListNode } from '../../../utils';

function reorderList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;

  let slow_pointer: ListNode | null = head;
  let fast_pointer: ListNode | null = head;

  while (fast_pointer && fast_pointer.next) {
    slow_pointer = slow_pointer?.next!;
    fast_pointer = fast_pointer?.next.next;
  }

  let prev_node: ListNode | null;
  let curr_node: ListNode | null;
  let next_node: ListNode | null;

  prev_node = null;
  curr_node = slow_pointer.next!;
  next_node = curr_node.next;

  while (next_node) {
    next_node = curr_node.next;
    curr_node.next = prev_node;
    prev_node = curr_node;
    next_node && (curr_node = next_node);
  }

  fast_pointer = prev_node;
  slow_pointer = head;
  next_node = prev_node;
  curr_node = slow_pointer;
  prev_node = null;

  while (next_node && slow_pointer) {
    curr_node.next = next_node;
    prev_node = curr_node;
    curr_node = curr_node?.next;
    next_node = slow_pointer.next;
    slow_pointer = slow_pointer?.next;
  }

  return curr_node;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2, node1);
let node3 = new ListNode(3, node2);
let node4 = new ListNode(4, node3);
let node5 = new ListNode(5, node4);

console.log(reorderList(node3));
console.log(reorderList(node5));
