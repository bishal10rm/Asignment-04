1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById refers selects one element by its unique id, getElementsByClassName refers selects all elements that have a specific class name and querySelector is
selects the first element that matches a CSS selector and querySelectorAll selects all elements that match a CSS selector.

2.How do you create and insert a new element into the DOM?
const newP=document.createElement('newP')
document.body.appendChild(newP);

3.What is Event Bubbling? And how does it work?
Event Bubbling is a JavaScript mechanism where an event starts from the target element and then propagates upward through its parent elements in the DOM tree.
When you click a nested element, the event happens in this order:
The event triggers on the target element.
Then it "bubbles up" to its parent.
Then to the grandparent.
Continues up until it reaches the document

4.What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a technique where you attach a single event listener to a parent element to handle events for its child elements using event bubbling.
It is useful to performance,claen code.

5.What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() methods stops the default browser behavior of an element and stopPropagation() methods is the Stops the event from bubbling up the DOM tree.
