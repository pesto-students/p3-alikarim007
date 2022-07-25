const fibonacci = {
    [Symbol.iterator]() {
      let n1 = 0, n2 = 1, value;
      return {
        next() {
          // The next line performs parallel assignment using destructuring.
          // It is equivalent to value = n1; n1 = n2; n2 = n1 + n2;
          [value, n1, n2] = [n1, n2, n1 + n2];
   
          // The next line is equivalent to return {value: value};
          return {value};
        }
      };
    }
  };
   
  // Note that "let" could be used in place of "const" on the next line,
  // but "const" is more correct here because each iteration
  // gets a new binding for the loop variable n
  // and it is not modified in the loop body.
  for (const n of fibonacci) {
    if (n > 10) break;
    console.log(n);
    // outputs 0, 1, 1, 2, 3, 5, 8
  }