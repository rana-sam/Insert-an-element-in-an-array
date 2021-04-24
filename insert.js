let array=[12,23,6,44,96,09]
let place=parseInt(prompt("Enter Index where you wants to enter an element."))
let num=parseInt(prompt("Enter number to place"))
switch (place) {
    case place:
        array.splice(place,0,num)
        console.log(array);
        break;

    default:
        break;
}
