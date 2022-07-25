// Refactor the above stack implementation, using the concept of closure, such that there is noway to access items array outside of createStack() function scope
function createStack() {
    return {
      items: [],
      push(item) {
        this.items.push(item);
      },
      pop() {
        return this.items.pop();
      }
    };
  }
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  stack.pop(); // => 5
  stack.items; // => [10]
  stack.items = [10, 100, 1000]; // Encapsulation broken!
// ------------------------------------------------------------------
  //Below Solution -  a possible refactoring of createStack():

function createStack() {
    const items = [];
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      }
    };
  }
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  stack.pop(); // => 5
  stack.items; // => undefined

//   items has been moved to a variable inside createStack() scope.

// Thanks to this change, from the outside of createStack() scope, there is no way to access or modify items array. items is now a private variable, and the stack is encapsulated: only push() and pop() method are public.

// push() and pop() methods, being closures, capture items variable from createStack() function scope.