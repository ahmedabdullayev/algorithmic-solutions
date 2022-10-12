var isMatch = function(s, p) {
    let obj = {};
    for(let i = 0; i < s.length; i++){

        // obj[s[i]] ? obj[s[i]] += 1 : obj[s[i]] = i;
        if(obj[s[i]] == null){
            obj[s[i]] = {['indices'] : [i]}
            obj[s[i]].count = 1;
        }else{
            obj[s[i]]['indices'].push(i);
            obj[s[i]].count += 1;
        }
//         for(let j = 0; j < p.length; j++){

//         }

    }
    //obj['a']['0'] = 'a'
    // console.log(obj['a'][0])
    console.log(obj['a'].count)
    return obj;
};

console.log(isMatch("abbab","a*b"))