//1
function absoluteValue(number){
 if (number > 0) {
     return number;
 } else if (number < 0) {
     return number * -1;
 } else {
     return null;
 }
}

console.log(absoluteValue(-57));

// Bonus
function multiplesOfFourAndSix() {
    let listPos = [];
for(let i =1; i <= 100; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
        listPos.push(i);
    }
}
    return listPos;
}

console.log(multiplesOfFourAndSix());



