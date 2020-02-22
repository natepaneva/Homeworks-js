
// HOMEWORK CLASS 8 - 
// TASK 1

// function testNumber(num){
//     return new Promise((resolve, reject)=>{
//         if (num === 10) {
//             reject ("That is not a requered value")
//         }
//         setTimeout(() => {
//             resolve ("Bingo!")
//         }, 2000);
//     })
// }

// testNumber(10)
// .then(success => {
// 	console.log(success)
// 	})
// .catch(error => console.log(`ERROR: ${error}`))

// TASK 2



let words = ['hi','there', 'how','are','you', 'doing'];


function changeAllToCaps(array){
    return new Promise((resolve, reject) => {
        for (let i = 0; i < array.length; i++) { 
            if ( typeof(array[i]) !== "string") {
                reject("Something went wrong");
            } 
            else {
                setTimeout(() => {
                    array[i] = array[i].toUpperCase();
                    resolve("Success");
                }, 2000);
            }
        }
    })   
}

// Istava funckija fore so for of ne mi funkcionira i frla error element.toUpperCase() is not a function
// function changeAllToCaps(array){
//     return new Promise((resolve, reject) => {
//         for (const element of array) {
//             if ( typeof(element) !== "string") {
//                 reject("Something went wrong");
//             } 
//             else {
//                 setTimeout(() => {
//                     array.map(element => {return element.toUpperCase()})
//                     resolve("Success");
//                 }, 2000);
//             }
//         }
//     })   
// }

//Mesto words ako e array mi frla error: array.sort() it's not a function???
function sortArray(array){
    return new Promise((resolve, reject) =>{
    if (array.length < 2) {
            reject ('There are not enough words');
        }
        else {
            setTimeout(() => {
                resolve (words.sort())
            }, 2000);
        }
    })
   
}

async function runFunctions(array){
    const capital = await changeAllToCaps(array)
    console.log(await sortArray(capital));
    console.log(`Everything is done in ${Math.round(performance.now())} ms.`)
}
runFunctions(words)






