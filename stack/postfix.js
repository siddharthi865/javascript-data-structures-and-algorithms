class Stack {

	// Array is used to implement stack
	constructor()
	{
		this.items = [];
	}

	// push(item)
  push(element)
  {
    // push element into the items
    this.items.push(element);
  }

	// pop()
  pop()
  {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0)
      return "Underflow";
    return this.items.pop();
  }

	// peek()
  peek()
  {
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
  }

	// isEmpty()
  isEmpty()
  {
    // return true if stack is empty
    return this.items.length == 0;
  }

	// printStack()
  printStack()
  {
    var str = "";
    for (var i = 0; i < this.items.length; i++)
      str += this.items[i] + " ";
    return str;
  }

}

// Performs Postfix Evaluation on a given exp
function postFixEvaluation(exp)
{
	var stack = new Stack();
	for (var i = 0; i < exp.length; i++) {
		var c = exp[i];
		if (!isNaN(c))
			stack.push(c - '0');
		else {
			var val1 = stack.pop();
			var val2 = stack.pop();
			if (val1 == "Underflow" || val2 == "Underflow")
				return "Can't perform postfix evaluation";
			switch (c) {
			case '+':
				stack.push(val2 + val1);
				break;

			case '-':
				stack.push(val2 - val1);
				break;

			case '/':
				stack.push(val2 / val1);
				break;

			case '*':
				stack.push(val2 * val1);
				break;
			}
		}
	}

	return stack.pop();
}

// calling the above method
// returns 9
console.log(postFixEvaluation("235*+8-"));

// returns postfix evaluation can't be performed
console.log(postFixEvaluation("23*+"));
