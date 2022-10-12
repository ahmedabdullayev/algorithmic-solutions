function isMerge(s, part1, part2) {
    // Merge is invalid if the parts' lengths don't add up to the string's
    if (part1.length + part2.length != s.length)
        return false;

    // Recursive function
    function g(i, j){
        // Base case: both pointers are exactly at the end of each part
        if (i == part1.length && j == part2.length)
            return true;

        // One of our pointers has extended beyond the part's length,
        // that couldn't be right
        if (i > part1.length || j > part2.length)
            return false;

        // Just part1 matches here so increment i
        if (part1[i] == s[i + j] && part2[j] != s[i + j])
            return g(i + 1, j);

        // Just part2 matches here so increment j
        else if (part1[i] != s[i + j] && part2[j] == s[i + j])
            return g(i, j + 1);

            // Both parts match here so try incrementing either pointer
        // to see if one of those solutions is correct
        // else if (part1[i] == s[i + j] && part2[j] == s[i + j])
        //     return g(i + 1, j) || g(i, j + 1);

        // Neither part matches here
        return false;
    }

    // Call the recursive function
    return g(0,0);
}

console.log(isMerge2('codewarss', 'code', 'warss'));
function isMerge2(s, part1, part2) {
    let obj = {};
    let iterOne = 0;
    let iterTwo = 0;
    let fullIter = 0;
    let result = "";
    for(let i = 0; i < s.length; i++){
        obj[s[i]] = i;
    }
    for(let r = 0; r < s.length; r++){
        if(iterOne == part1.length && iterTwo == part2.length){
            console.log('ew')
            return true;
        }
        if(iterOne > part1.length || iterTwo > part2.length){
            return false;
        }
        if(result == s && iterOne-1 == part1.length && iterTwo-1 == part2.length){
            console.log(iterOne,iterTwo)
            return true;
        }
        if(s[fullIter] == part1[iterOne]){
            result += part1[iterOne];
            fullIter++;
            iterOne++;
            if(result == s && iterOne == part1.length && iterTwo == part2.length){
                console.log(iterOne,iterTwo)
                return true;
            }
        }
        if(s[fullIter] == part2[iterTwo]){

            result += part2[iterTwo];
            fullIter++;
            iterTwo++;
            if(result == s && iterOne == part1.length && iterTwo == part2.length){
                console.log(iterOne,iterTwo)
                return true;
            }
        }

    }
    console.log("string: "+s+" pa1: "+part1+" pa2: "+part2)
    return iterOne-1 == part1.length && iterTwo-1 == part2.length;
}