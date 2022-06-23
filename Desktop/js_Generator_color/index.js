 /* Color Generator
 input = apple :: output = "i am red"
 input = mango :: output = " i am yellow"
 input = orange :: output = " i am orange" */

 let input = "orange"

 //case 1 : input = apple
 switch(input){
   case "apple":
     console.log('I am red');
     break;
   case "mango":
     console.log('I am yellow');
     break;
    case "orange":
     console.log('I am orange!');
     break;
   default:
     console.log('I dont know');
     break;
 }  