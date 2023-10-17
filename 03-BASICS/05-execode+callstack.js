///JAVASCRIPT EXECUTION CONTEXT::>>>>>>>>>>>>>>>>
//01--Global Execution Context
//02--Function Execution Context
//03--EVAL Execution Context(not imp for now)

//eg:
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 5)

///now: 01- GEC --->>(this) function
//      02- Memory Phase-->> val1- undefined
//                      -->> val2- undefined
//                      -->> addNum- definetion
//                      -->>result1- undefined
//                      -->>result2- undefined
//      Memory phase aka first cycle is completed.
//      03- Execution Phase-->> val1- 10
//                         -->> val2- 5
//                         -->> addNum- new var envi + execution thread
//
//      04- Last and imp: now line 13 n 14 will create their own variable environment and within that they creat meory and execution phase seperately and will give total and at last this total will give the global execution context. 
//THIS IS HOW EXECUTION PHASE AND CONTEXT WORKS.


////JAVASCRIPT CALL STACK::>>>>>>>>>>>>>>>
//Most important in call stack is-----we have LIFO concept: Last In First Out.