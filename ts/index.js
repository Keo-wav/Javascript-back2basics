// let aString : string = 'Hi you fucking nice person'
// console.log(aString)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var TestModule;
(function (TestModule) {
    var Vehicle = /** @class */ (function () {
        // CONSTRUCTOR
        function Vehicle(mileAge, brand, color, owner) {
            this._mileAge = mileAge;
            this._brand = brand;
            this._color = color;
            this._owner = owner;
        }
        Object.defineProperty(Vehicle.prototype, "mileAge", {
            // GETTERS
            get: function () {
                return this._mileAge;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "brand", {
            get: function () {
                return this._brand;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vehicle.prototype, "color", {
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
        Object.defineProperty(Vehicle.prototype, "owner", {
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
        Vehicle.prototype.Presentation = function () {
            console.log("BRAND : " + this._brand + " | COLOR : " + this._color + " | OWNER : " + this._owner + " | MILEAGE : " + this._mileAge + ".");
        };
        Vehicle.prototype.GoForward = function (miles) {
            this._mileAge += miles;
            console.log('The vehicle moves forward by ' + miles + ' miles. Its mileage is now ' + this._mileAge + '.');
        };
        Vehicle.prototype.GoBackwards = function (miles) {
            this._mileAge += miles;
            console.log('The vehicle moves backwards by ' + miles + ' miles. Its mileage is now ' + this._mileAge + '.');
        };
        return Vehicle;
    }());
    TestModule.Vehicle = Vehicle;
    var Car = /** @class */ (function (_super) {
        __extends(Car, _super);
        function Car(mileAge, brand, color, owner, airbags) {
            if (owner === void 0) { owner = ''; }
            if (airbags === void 0) { airbags = false; }
            var _this = _super.call(this, mileAge, brand, color, owner) || this; // calling parent class ctor
            _this._airbags = airbags;
            return _this;
        }
        Object.defineProperty(Car.prototype, "airbags", {
            get: function () {
                return this._airbags;
            },
            set: function (installAirbags) {
                if (installAirbags !== false || this._airbags == false) {
                    this._airbags = true;
                }
            },
            enumerable: false,
            configurable: true
        });
        return Car;
    }(Vehicle));
    TestModule.Car = Car;
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        function Plane() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Plane.prototype, "country", {
            get: function () {
                return this._country;
            },
            set: function (countryName) {
                if (countryName !== '') {
                    this._country = countryName;
                }
            },
            enumerable: false,
            configurable: true
        });
        return Plane;
    }(Vehicle));
    TestModule.Plane = Plane;
})(TestModule || (TestModule = {}));
// let car = new TestModule.Car(0, 'Pontiac Trans Am', 'Black', 'David Hasslehoff')
// car.Presentation()
// car.airbags = true
// car.GoForward(6)
// car.Presentation()
// let airForce1 = new TestModule.Plane(1000, 'Boeing', 'White', 'POTUS')
// airForce1.Presentation()
// airForce1.owner = "Donald J Trump"
// airForce1.GoForward(1000)
// airForce1.Presentation()
