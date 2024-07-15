module Exercice {
    export class Person {
        protected _lastName:string
        protected _firstName:string
        protected _gender:string
        protected _age:number
        protected _height:number
        protected _weight:number

        constructor(lastName:string, firstName:string, gender:string, age:number, height:number, weight:number) {
            this._lastName = lastName
            this._firstName = firstName
            this._gender = gender
            this._age = age
            this._height = height
            this._weight = weight
        }

        get lastName() {
            return this._lastName
        }
        
        get firstName() {
            return this._firstName
        }
        
        get gender() {
            return this._gender
        }
        
        get age() {
            return this._age
        }
        
        get height() {
            return this._height
        }
        
        get weight() {
            return this._weight
        }
    }

    export class Student extends Person {
        private _promotion:number

        constructor(lastName:string, firstName:string, gender:string, age:number, height:number, weight:number, promotion:number) {
            super(lastName, firstName, gender, age, height, weight)
            this._promotion = promotion
        }
    }

    export class Teacher extends Person {
        private _courses:string[]
        
        constructor(lastName:string, firstName:string, gender:string, age:number, height:number, weight:number, courseList:string[]) {
            super(lastName, firstName, gender, age, height, weight)
            this._courses = courseList
        }

        PresentCourses() {
            for (let i = 0 ; i < this._courses.length ; i++) {
                console.log("- " + this._courses[i])
            }
        }
    }
}

let teacher = new Exercice.Teacher('Pataguel', 'James', 'M', 38, 175, 75, ['Typescript', 'Angular'])
console.log("I, " + teacher.firstName + " " + teacher.lastName + " teach the following courses :")
teacher.PresentCourses()

