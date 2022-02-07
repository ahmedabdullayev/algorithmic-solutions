function toCamelCase(str){
    let finalString = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] == "-" || str[i] == "_"){
            i++;
            finalString += str[i].toUpperCase();
        }else{
            finalString += str[i];
        }
    }
    return finalString;
}
/// test
// describe("Tests", () => {
//     it("test", () => {
//         Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
//         Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
//         Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
//         Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
//
//     });
// });
