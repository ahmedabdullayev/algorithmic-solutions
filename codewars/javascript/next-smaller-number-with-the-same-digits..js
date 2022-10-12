function nextSmaller(n) {
    let string = ""+n;
    let number = n;
    let rightNum = true;
    while(number > 0){
        number--;
        let toStr = "" + number;
        for(let i = 0; i < string.length; i++){
            rightNum = true;
            if(toStr.indexOf(string[i]) <= -1){
                rightNum = false;
                break;
            }

            }
            if(rightNum == true){
                return number;
            }
    }
    return -1;
}

console.log(nextSmaller(514));


// function ifStringsHaveSameElements(f, s) {
//     let lowest;
//     let longest;
//     if(f.length >= s.length){
//         longest = f;
//         lowest = s;
//     }else{
//         lowest = f;
//         longest = s;
//     }
//     for(let i = 0; i < longest.length; i++){
//         if(lowest.indexOf(longest[i]) <= -1) return false;
//     }
//     return true;
//
// }
//
// console.log(ifStringsHaveSameElements("abca", "cba"));