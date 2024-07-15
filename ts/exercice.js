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
var Exercice;
(function (Exercice) {
    var Person = /** @class */ (function () {
        function Person(lastName, firstName, gender, age, height, weight) {
            this._lastName = lastName;
            this._firstName = firstName;
            this._gender = gender;
            this._age = age;
            this._height = height;
            this._weight = weight;
        }
        Object.defineProperty(Person.prototype, "lastName", {
            get: function () {
                return this._lastName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "firstName", {
            get: function () {
                return this._firstName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "gender", {
            get: function () {
                return this._gender;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "height", {
            get: function () {
                return this._height;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "weight", {
            get: function () {
                return this._weight;
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    Exercice.Person = Person;
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(lastName, firstName, gender, age, height, weight, promotion) {
            var _this = _super.call(this, lastName, firstName, gender, age, height, weight) || this;
            _this._promotion = promotion;
            return _this;
        }
        return Student;
    }(Person));
    Exercice.Student = Student;
    var Teacher = /** @class */ (function (_super) {
        __extends(Teacher, _super);
        function Teacher(lastName, firstName, gender, age, height, weight, courseList) {
            var _this = _super.call(this, lastName, firstName, gender, age, height, weight) || this;
            _this._courses = courseList;
            return _this;
        }
        Teacher.prototype.PresentCourses = function () {
            for (var i = 0; i < this._courses.length; i++) {
                console.log("- " + this._courses[i]);
            }
        };
        return Teacher;
    }(Person));
    Exercice.Teacher = Teacher;
})(Exercice || (Exercice = {}));
var teacher = new Exercice.Teacher('Pataguel', 'James', 'M', 38, 175, 75, ['Typescript', 'Angular']);
console.log("I, " + teacher.firstName + " " + teacher.lastName + " teach the following courses :");
teacher.PresentCourses();
