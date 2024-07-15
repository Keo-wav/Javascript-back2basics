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

module TestModule {
    export class Vehicle {

        // CLASS ATTRIBUTES / PROPERTIES

        private _mileAge: number
        private _brand: string
        private _color: string
        private _owner: string

        // CONSTRUCTOR

        constructor(mileAge:number, brand:string, color:string, owner:string) {
            this._mileAge = mileAge
            this._brand = brand
            this._color = color
            this._owner = owner
        }

        // GETTERS

        get mileAge() {
            return this._mileAge
        }

        get brand() {
            return this._brand
        }

        get color() {
            return this._color
        }
        
        get owner() {
            return this._owner
        }
        
        // SETTERS
        
        set owner(name:string) {
            if (name !== 'Keo')
                this._owner = name
        }

        set color(color:string) {
            if (color !== this._color)
                this._color = color
        }
        
        // METHODS

        Presentation() {
            console.log("BRAND : " + this._brand + " | COLOR : " + this._color + " | OWNER : " + this._owner + " | MILEAGE : " + this._mileAge + ".")
        }

        GoForward(miles:number) {
            this._mileAge += miles
            console.log('The vehicle moves forward by ' + miles + ' miles. Its mileage is now ' + this._mileAge + '.')
        }

        GoBackwards(miles:number) {
            this._mileAge += miles
            console.log('The vehicle moves backwards by ' + miles + ' miles. Its mileage is now ' + this._mileAge + '.')
        }
    }

    export class Car extends Vehicle {
        private _airbags:boolean

        constructor(mileAge:number, brand:string, color:string, owner:string = '', airbags = false) {
            super(mileAge, brand, color, owner) // calling parent class ctor
            this._airbags = airbags
        }

        get airbags() {
            return this._airbags
        }

        set airbags(installAirbags:boolean) {
            if (installAirbags !== false || this._airbags == false) {
                this._airbags = true
            }
        }
    }

    export class Plane extends Vehicle {
        private _country:string

        get country() {
            return this._country
        }

        set country(countryName:string) {
            if (countryName !== '') {
                this._country = countryName
            }
        }
    }
}

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


