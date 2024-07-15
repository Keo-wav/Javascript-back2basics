// let aString : string = 'Hi you fucking nice person'
// console.log(aString)
// let isFake : boolean = true
// console.log(!isFake)
// let devil : number = 666
// console.log(devil *2)
// enum cardinalPoints {
//     N,
//     S, 
//     E,
//     W
// }
// let north : cardinalPoints = cardinalPoints.N
// let south : cardinalPoints = cardinalPoints.S
// let east : cardinalPoints = cardinalPoints.E
// let west : cardinalPoints = cardinalPoints.W
// console.log(north)
// console.log(south)
// console.log(east)
// console.log(west)
// let tab : number[] = [6, 12, 666, 12, 12]
// console.log(tab)
// let noType : void
// console.log(noType)
// let anyType : any = 6
// console.log(anyType)
// can assign a value to anyType because it can have .. well .. ANY type.
// on the other hand the noType value does not have a type so we can't assign it anything (error inc)
// named function 
// console.log('named function :')
// function Add(x:number, y:number):number {
//     return x + y
// }
// function SaltyGreet(name:string):string {
//     let rand:number = Math.round(Math.random()*50)
//     return "Hey there, " + name + ", your stupid ass has to spend " + rand + " years to even being okay at coding, so get cracking you nutbust"
// }
// console.log(Add(5, 7))
// console.log(SaltyGreet('Nicolas'))
// anonymous function with lambda
var complexOperation = function (a, b, c) {
    var result = 0;
    result += a * c;
    result /= b;
    return result;
};
console.log(complexOperation(6, 9, 3));
var words = ['thank you', 'arigato', 'hello', 'konichiwa', 'my name is', 'watashiwa', 'damn', 'kuso', 'pervert', 'hentai'];
function EngWords(tab) {
    var englishWordsTab = [];
    for (var i = 0; i < tab.length; i++) {
        if (i % 2 === 0) {
            englishWordsTab.push(tab[i]);
        }
    }
    return englishWordsTab;
}
function JapWords(tab) {
    var japaneseWordsTab = [];
    for (var i = 0; i < tab.length; i++) {
        if (i % 2 !== 0) {
            japaneseWordsTab.push(tab[i]);
        }
    }
    return japaneseWordsTab;
}
// console.log(words)
// console.log(EngWords(words))
// console.log(JapWords(words))
