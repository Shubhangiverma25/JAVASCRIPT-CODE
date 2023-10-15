'use strict'; //treat all JS code as newer version

let name = 'shubhangi'
let age = 24
let isLoggedIn = false

//PRIMITIVE DATATYPES -->
//number => 2 to the power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value(a type): its a representation of empty value
//undefined => the value is not assigned yet
//symbol => unique

//OBJECTS -->

console.log(typeof 'shubhangi'); //this is used to see the type of value, like in this case we will get string
console.log(typeof undefined); //undefined
console.log(typeof null); //object

////***********SUMMARY**********////
///see the ECMA Script for datatypes TYPEOF: IMP FOR interview>>>>
// Primitive Datatypes are of 7 types:
//01: string
//02: number
//03: boolean
//04: null
//05: undefined
//06: symbol
//07: bigint  ==>just write n at the end of the big no and it will become bigint

// Reference(non-primitive)
//01: array
//02: objects
//03: functions

//for array:
const heroes =['ironman','dr. strange','captain america'];

//for objects:
let myObj ={
    name: 'shubhangi',
    age: 24,
    proffesion: 'developer'
};

//for functions:
const myfunction = function(){
    console.log('Hello World')
};