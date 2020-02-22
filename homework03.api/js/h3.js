let btn = $("#btn");
let tbody = $("#tbody");
let responseMovies;


$("#btn").on("click", function() {
    $.ajax({
        url: "https://swapi.co/api/films/",
        success: function(response) {
            responseMovies = response.results;
            filmInfo(responseMovies)
            console.log("Request successful");
            console.log("Response from request:", response)
        },
        error: function(response) {
            console.log("The request failed because of: ", response.responseText);
        }

    });
    function filmInfo(){
        responseMovies.forEach((responseMovies) => {
            $.ajax({
                url: responseMovies.characters[0],
                success: function(responsePeople) {
                    console.log("Request successful");
                    printInfo(responsePeople)
                },
                error: error => {
                    errorResult(error)
                }
                
            })
            function printInfo(responsePeople){
                tbody.append(`<tr>
                <td>${responseMovies.title}</td>
                <td>${responseMovies.director}</td>
                <td>${responseMovies.producer}</td>
                <td>${responseMovies.episode_id}</td>
                <td><a href="${responseMovies.url}" target="blank">${responseMovies.url}</a></td>
                <td>${responseMovies.characters.length}</td>
                <td>${responseMovies.planets.length}</td>
                <td>${responseMovies.starships.length}</td>
                <td>${responseMovies.vehicles.length}</td>
                <td>${responseMovies.species.length}</td>
                <td>${responsePeople.name}</td>
                </tr>`);
            }
        }
    )}
})


// let responseNames = [];
// let responseLeadNames;

// $("#btn").on("click", function() {
//     $.ajax({
//         url: "https://swapi.co/api/films/",
//         success: function(response) {
//             console.log("Request successful");
//             responseMovies = response.results;
//             for (let i = 0; i < responseMovies.length; i++) {
//                 tbody.append(`<tr>
//                 <td>${responseMovies[i].title}</td>
//                 <td>${responseMovies[i].director}</td>
//                 <td>${responseMovies[i].producer}</td>
//                 <td>${responseMovies[i].episode_id}</td>
//                 <td><a href="${responseMovies[i].url}" target="blank">${responseMovies[i].url}</a></td>
//                 <td>${responseMovies[i].characters.length}</td>
//                 <td>${responseMovies[i].planets.length}</td>
//                 <td>${responseMovies[i].starships.length}</td>
//                 <td>${responseMovies[i].vehicles.length}</td>
//                 <td>${responseMovies[i].species.length}</td>


//                 <td>${responseMovies[i].characters[0]}</td>
//                 </tr>`);

//                 responseNames.push(responseMovies[i].characters[0])
//             }

//             console.log("Response from request:", response)
//         },
//         error: function(response) {
//             console.log("The request failed because of: ", response.responseText);
//         }

//     });
//     for (let i = 0; i < responseNames.length; i++) {
//         $.ajax({
//             url: `${responseMovies[i]}`,
//             // Kako da pristapam do samiot url preku niza?
//             success: function(leadNames) {
//                 console.log("Request successful");
//                 responseLeadNames = leadNames.results
//                 tbody.append(`<td>${responseLeadNames.name[0]}</td>`)
//             }
//         })

//     }
// })