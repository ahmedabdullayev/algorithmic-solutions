function duplicateCount(text){
    let reformedText = text.toLowerCase().trim();
    const countOfCharacters = {};
    for(let i = 0; i < reformedText.length; i++){
        let char = reformedText[i];
        if (char in countOfCharacters) {
            countOfCharacters[char] += 1;
        } else {
            countOfCharacters[char] = 0;
        }
    }
    const duplicatedCharacters = Object.entries(countOfCharacters).filter(([key, value]) => {
        return value > 0;
    });
    return duplicatedCharacters.length;
}

function duplicateCount01(text){
    const lower = text.toLowerCase();
    const usedCharacters = [];

    for(let i = 0; i < lower.length; i++){
        let char = lower[i];
        if(!usedCharacters.includes(char) && lower.split(char).length > 2){
            usedCharacters.push(char);
        }
    }
    return usedCharacters.length;
}
let result = duplicateCount01('ccahmrebbscdd');
console.log(result)