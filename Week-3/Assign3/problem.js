function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
    
    let message=`Count is${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];
}
const[increment,log] =createIncrement();
increment();
increment();
increment();
log();// What is logged?
//Ans: Count is 0
// "In the first example, are we not tracking the reference of count and only assigning its initial value to message?" - yes. The closure is tracking the reference of message, which only has the initial value of count but doesn't get updated by the log closure.


// Here we not tracking the reference of count and only assigning its initial value to message?
// By moving the message variable inside of the log function are we somehow telling JS to track the reference of the count value?