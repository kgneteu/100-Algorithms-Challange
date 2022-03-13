// Singly-linked lists are already defined with this interface:
class ListNode<T> {
    value: T;
    next: ListNode<T>;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

function removeKFromList(l: ListNode<number>, k: number): ListNode<number> {
    if (l === null) return null;
    else {
        l.next = removeKFromList(l.next, k);
        return (l.value === k) ? l.next : l
    }
}


//console.log(removeKFromList(l, 3))
