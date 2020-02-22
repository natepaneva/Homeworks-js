
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

// Osven ako prviot element ne e string ne vlaga vo reject, break ne mi pomaga



let words = ['hi','there', 'how','are', 'you', 'doing'];

function caps(array){
    return array.map(word => {return word.toUpperCase()})
};

const isNotString = currentvalue => currentvalue === String(currentvalue)


let changeAllToCaps = (array) => {
    return new Promise((resolve, reject) => {
        if (array.every(isNotString)=== false){
            reject("Something went wrong")
        }
        else {
            setTimeout(() => {
                resolve(caps(array))
            }, 2000);
        }
    })
}

// changeAllToCaps(words)
// .then(data => {
//     console.log(data);
// })
// .catch(err => console.log(err))


// changeAllToCaps(words)
// .then( success => {
//     console.log(success, words)})
// .catch(error => console.log(`ERROR: ${error}`))


function order(array){
    return new Promise((resolve, reject) =>{
    if (array.length < 2) {
            reject ('There are not enough words');
        }
        else {
            setTimeout(() => {
                resolve (array.sort())
                
            }, 2000);
        }
    })
   
}

async function runFunctions(array){
   const allCapital = await changeAllToCaps(array)
   console.log(await order(allCapital));
   console.log(`Everything is done for ${Math.round(performance.now())} ms`);
   
}
runFunctions(words)
 
