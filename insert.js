let array=[12,22,3,45,2,67,21]
let place=parseInt(prompt("press 1 to insert at end.    press 2 to insert at start."))
let num=parseInt(prompt("Enter element to isert"))
switch (place) {
    case 1:
        array.push(num)
        console.log(array);
        break;
    case 2:
         array.unshift(num)
         console.log(array);
         break;
    default:
        break;
    }
    
