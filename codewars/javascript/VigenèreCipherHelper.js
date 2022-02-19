function VigenèreCipher(key, abc) {

    this.encode = function (str) {
        let myKey = generateKey(str, key);
        let res = "";
        for(let i = 0; i < str.length; i++){
            if(abc.indexOf(str[i]) >= 0){
                let b = (abc.indexOf(str[i]) + abc.indexOf(myKey[i])) % abc.length;
                res += abc[b];
            }else{
                res += str[i];
            }
        }
        return res;
    };

    this.decode = function (str) {
        let myKey = generateKey(str, key);
        let res = "";
        for(let i = 0; i < str.length; i++){
            if(abc.indexOf(str[i]) >= 0){
                let b = (abc.indexOf(str[i]) - abc.indexOf(myKey[i]) + abc.length) % abc.length;
                res += abc[b];
            }else{
                res += str[i];
            }
        }
        return res;
    };
}

const generateKey = function (str, key){
    let myKey = key;
    for (let i = 0; i < str.length - key.length; i++){
        myKey += key[i % key.length];
    }
    return myKey;
}