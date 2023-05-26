// Whenever we call the class, we first write the constructor

class Stack {
  item = [];
  currentSize;
  maxSize;
  constructor(size) {
    this.maxSize = size;
    this.currentSize = this.item.length;
  }
  push(newVal) {
    if (this.currentSize >= this.maxSize) {
      alert("stack is full");
    } else {
      this.item[this.currentSize] = newVal;
      this.currentSize++;
    }
  }

  pop() {
    if (this.currentSize > 0) {
      this.currentSize--;
      this.item.length = this.currentSize;
    } else {
      alert("stack is already empty");
    }
  }

  display() {
    console.log(this.item);
  }
}

st1 = new Stack(5);
// st1.push(20)
//  st1.display();

// If we want direct access of push & pop without using console, we need to enter following lines

/* 
st1.push(40)
st1.push(36)
st1.push(69)
st1.push(407)

st1.display()

st1.pop()


*/
