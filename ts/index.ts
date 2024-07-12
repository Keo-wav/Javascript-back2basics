let aString : string = 'Hi you fucking nice person'
console.log(aString)

let isFake : boolean = true
console.log(!isFake)

let devil : number = 666
console.log(devil *2)

enum cardinalPoints {
    N,
    S, 
    E,
    W
}

let north : cardinalPoints = cardinalPoints.N
let south : cardinalPoints = cardinalPoints.S
let east : cardinalPoints = cardinalPoints.E
let west : cardinalPoints = cardinalPoints.W
console.log(north)
console.log(south)
console.log(east)
console.log(west)

let tab : number[] = [6, 12, 666]
console.log(tab)

let noType : void
console.log(noType)

let anyType : any = 6
console.log(anyType)

// can assign a value to anyType because it can have .. well .. ANY type.
// on the other hand the noType value does not have a type so we can't assign it anything (error inc)
