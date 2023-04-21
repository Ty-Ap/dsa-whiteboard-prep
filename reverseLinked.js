'use strict';

//init  temporary pointers to null
let next = null; 
let prev = null;

while (head!=null){
  //this is where we mess with the links while retaining references to them
   next = head.next;//moves next foward from head by one node in the original order
   head.next = prev;//makes head link to the prev node
   prev = head;// update prev pointer
   head= next;// update next pointer

}

//set the head of ll to prev var and return the head
head = prev;
return head;

