// WITH OBJECTS

function Academy (name, students, subjects, start, end){
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subjects.length * 10; 

    this.printStudents = function(){
        console.log(this.students);
    }

    this.printSubjects = function(){
        console.log(this.subjects);
        
    }
}

let academy1 = new Academy ("Seavus", ["Nate", "Ane", "Kika"], ["Math", "History"], "01.09", "30.06" )
console.log(academy1);

function Subject (title, numberOfClasses, isElective, academy, students){
    this.title = title;
    this.numberOfClasses = numberOfClasses === undefined ? 10 : numberOfClasses;
    this.isElective = isElective === undefined ? false : true;
    this.academy = academy;
    this.students = students;

    this.overrideClasses = function(num){
        if (num >= 3) {
            this.numberOfClasses = num;
        } else {
            this.numberOfClasses = this.numberOfClasses;
        }
    }
}

let subject1 = new Subject ("Math", 15, true, "Seavus", ["Marko", "Deni", 'Ivo'] )
console.log(subject1);

function Student(firstName, lastName, age, academy, currentSubject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = academy;
    this.currentSubject = currentSubject === undefined ? null : currentSubject;

    this.startAcademy = function(object){
        const {students} = object
        return students.push(this.firstName)
    }
    this.startSubject = function(object){
        const {students, title} = object;
        if (title === this.currentSubject) {
            this.completedSubjects.push(this.currentSubject);
            this.currentSubject = undefined;
        }
        return students.push(this.firstName);
    }
}

let student1 = new Student ("Ole", "Petrovska", 23, academy1, "Math");
console.log(student1);

//WITH CLASSES

// class Academy {
//     constructor(name, students, subjects, start, end){
//     this.name = name;
//     this.students = students;
//     this.subjects = subjects;
//     this.start = start;
//     this.end = end;
//     this.numberOfClasses = this.subjects.length * 10; 
//     }
//     printStudents(){
//         console.log(this.students);
        
//     }
//     printSubjects(){
//         console.log(this.subjects);
        
//     }
// }

// let academy1 = new Academy ("Seavus", ["Nate", "Ane", "Kika"], ["Math", "History"], "01.09", "30.06" )
// console.log(academy1);


// class Subject {
//     constructor(title, numberOfClasses, isElective, academy, students){
//         this.title = title;
//         this.numberOfClasses = numberOfClasses === undefined ? 10 : numberOfClasses;
//         this.isElective = isElective === undefined ? false : true;
//         this.academy = academy;
//         this.students = students;
//     }
//     overrideClasses(num){
//         if (num >= 3) {
//             this.numberOfClasses = num;
//         } else {
//             this.numberOfClasses = this.numberOfClasses;
//         }
//     }
// }

// let subject1 = new Subject ("Math", 15, true, "Seavus", ["Marko", "Deni", 'Ivo'] )
// console.log(subject1);



// class Student{
//     constructor(firstName, lastName, age, academy, currentSubject ){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.completedSubjects = [];
//         this.academy = academy;
//         this.currentSubject = currentSubject === undefined ? null : currentSubject;
//     }
//     startAcademy(object){
//         const {students} = object
//         return students.push(this.firstName)
//     }
//     startSubject(object){
//         const {students, title} = object;
//         if (title === this.currentSubject) {
//             this.completedSubjects.push(this.currentSubject);
//             this.currentSubject = undefined;
//         }
//         return students.push(this.firstName)
//     }
// }

// let student1 = new Student ("Ole", "Petrovska", 23, academy1, "Math");
// console.log(student1);
