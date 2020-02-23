//WITH OBJECTS

function Person (firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function(){
        console.log(`This is ${this.firstName} ${this.lastName}.`);
    }
}

const person1 = new Person ("Lile", "Andova", 33);

function Student(firstName, lastName, age, academyName, studentId){
    Object.setPrototypeOf(this, new Person(firstName, lastName, age))
    this.academyName = academyName;
    this.studentId = studentId

    this.study = function(){
        console.log(`The student ${this.firstName} is studying in the "${this.academyName}" academy.`);
    }
}

const student1 = new Student ("Natasha", "Paneva", 22, "SEDC", 58992);
const student2 = new Student ("Lina", "Paneva", 16, "ESRA", 63992);

console.log(student1);
console.log(student2);


function DesignStudent(firstName, lastName, age,  studentId, studentOfTheMonth){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, "Design", studentId))

    this.studentOfTheMonth = studentOfTheMonth === undefined ? false : true;
    this.attendAdobeExam = function(){
        console.log(`The student ${firstName}is doing an adobe exam!`);
    }
}

const student3 = new DesignStudent("Ane", "Vasileva", 21, 12431, true);
console.log(student3);

function CodeStudent(firstName, lastName, age, studentId){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, "Code", studentId))

    this.hasIndividualProject = false;
    this.hasGroupProject = false;

    this.doProject = function(type){
        if (type === "group") {
            this.hasGroupProject = true;
            this.hasIndividualProject = false;
        } 
        if (type === "individual") {
            this.hasGroupProject = false
            this.hasIndividualProject = true;
        }
    }
}


const student4 = new CodeStudent ("Dani", "Petrova", 19, 9783);
console.log(student4);

function NetworkStudent(firstName, lastName, age, studentId, academyPart){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, "Network", studentId))

    this.academyPart= academyPart;

    this.attendCiscoExam = function(){
        console.log(`The student ${firstName} is doing a cisco exam!`);
    }
}

const student5 = new NetworkStudent("Ole", "Ansarova", 24, 9828, 3);
console.log(student5);


Person.prototype.currentAcademy = function(student){
    console.log(student.academyName);
}

student5.currentAcademy(student3);
student4.currentAcademy(student2);
student1.currentAcademy(student1);
student2.currentAcademy(student4);
student3.currentAcademy(student5);
person1.currentAcademy(student3);


//WITH CLASSES

// class Person {
//    constructor (firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//    } 
//    getFullName(){
//     console.log(`This is ${this.firstName} ${this.lastName}.`);
//    }
// }

// const person1 = new Person ("Lile", "Andova", 33)

// class Student extends Person {
//     constructor (firstName, lastName, age, academyName, studentId){
//         super (firstName, lastName, age) 

//         this.academyName = academyName;
//         this.studentId = studentId;
//     }
//     study(){
//         console.log(`The student ${this.firstName} is studying in the "${this.academyName}" academy.`);
//     }
// }

// const student1 = new Student ("Natasha", "Paneva", 22, "SEDC", 58992);
// const student2 = new Student ("Lina", "Paneva", 16, "ESRA", 63992);

// console.log(student1);
// console.log(student2);

// class DesignStudent extends Student{
//     constructor(firstName, lastName, age,  studentId, studentOfTheMonth){
//         super(firstName, lastName, age, "Design", studentId)

//         this.studentOfTheMonth = studentOfTheMonth === undefined ? false : true;
//     }
//     attendAdobeExam(){
//         console.log(`The student ${firstName}is doing an adobe exam!`);
//     }
// }

// const student3 = new DesignStudent("Ane", "Vasileva", 21, 12431, true);
// console.log(student3);

// class CodeStudent extends Student {
//     constructor(firstName, lastName, age, studentId){
//         super(firstName, lastName, age, "Code", studentId)

//         this.hasIndividualProject = false;
//         this.hasGroupProject = false;

//     }
//     doProject(){
//         if (type === "group") {
//             this.hasGroupProject = true;
//             this.hasIndividualProject = false;
//         } 
//         if (type === "individual") {
//             this.hasGroupProject = false
//             this.hasIndividualProject = true;
//         }
//     }
// }


// const student4 = new CodeStudent ("Dani", "Petrova", 19, 9783);
// console.log(student4);

// class NetworkStudent extends Student {
//     constructor (firstName, lastName, age, studentId, academyPart){
//         super(firstName, lastName, age, "Network", studentId)

//         this.academyPart= academyPart;

//     }
//     attendCiscoExam(){
//         console.log(`The student ${firstName} is doing a cisco exam!`);
//     }
// }

// const student5 = new NetworkStudent("Ole", "Ansarova", 24, 9828, 3);
// console.log(student5);


// Person.prototype.currentAcademy = function(student){
//     console.log(student.academyName);
// }

// student5.currentAcademy(student3);
// student4.currentAcademy(student2);
// student1.currentAcademy(student1);
// student2.currentAcademy(student4);
// student3.currentAcademy(student5);
// person1.currentAcademy(student3);