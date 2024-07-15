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
// function with lambda
// let complexOperation = (a:number, b:number, c:number) => {
//     let result:number = 0
//     result += ((a * c) / b ) * (Math.random() * 100)
//     return Math.round(result)
// }
// console.log(complexOperation(6, 9, 3))
// let words: string[] = ['thank you', 'arigato', 'hello', 'konichiwa', 'my name is', 'watashiwa', 'damn', 'kuso', 'pervert', 'hentai']
// function EngWords(tab:string[]):string[] {
//     let englishWordsTab: string[] = []
//     for (let i = 0; i<tab.length; i++) {
//         if (i % 2 === 0) {
//             englishWordsTab.push(tab[i])
//         }
//     }
//     return englishWordsTab
// }
// function JapWords(tab:string[]):string[] {
//     let japaneseWordsTab: string[] = []
//     for (let i = 0; i<tab.length; i++) {
//         if (i % 2 !== 0) {
//             japaneseWordsTab.push(tab[i])
//         }
//     }
//     return japaneseWordsTab
// }
// console.log(words)
// console.log(EngWords(words))
// console.log(JapWords(words))
var Car = /** @class */ (function () {
    // CONSTRUCTOR
    function Car(mileAge, brand, color, owner) {
        if (owner === void 0) { owner = ''; }
        this._mileAge = mileAge;
        this._brand = brand;
        this._color = color;
        this._owner = owner;
    }
    Object.defineProperty(Car.prototype, "mileAge", {
        // GETTERS
        get: function () {
            return this._mileAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (color !== this._color)
                this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        // SETTERS
        set: function (name) {
            if (name !== 'Keo')
                this._owner = name;
        },
        enumerable: false,
        configurable: true
    });
    // METHODS
    Car.prototype.CarPresentation = function () {
        console.log("CAR BRAND : " + this._brand + " | CAR COLOR : " + this._color + " | CAR OWNER : " + this._owner + " | CAR MILEAGE : " + this._mileAge + " miles.");
    };
    Car.prototype.GoForward = function (miles) {
        this._mileAge += miles;
        console.log('The car drives forward by ' + miles + ' miles. Its mileage is now ' + this._mileAge + '.');
    };
    Car.prototype.GoBackwards = function (miles) {
        this._mileAge += miles;
        console.log('The car drives backwards by ' + miles + ' miles. Its mileage is now ' + this._mileAge + '.');
    };
    return Car;
}());
var car1 = new Car(1200, 'Volvo', 'Cream');
var car2 = new Car(14800, 'Pontiac Trans Am', 'Black', 'David Hasselhoff');
console.log(car1);
car1.owner = 'Some Dude';
console.log(car1);
car1.owner = 'Keo'; // does not change owner because of setter rule
console.log(car1);
console.log(car2);
car2.color = 'Black'; // does not change owner because of setter rule
console.log(car2);
car2.color = 'Pink';
console.log(car2);
car1.CarPresentation();
car2.CarPresentation();
car1.GoForward(120);
car1.CarPresentation();
car2.GoBackwards(3);
car2.CarPresentation();
