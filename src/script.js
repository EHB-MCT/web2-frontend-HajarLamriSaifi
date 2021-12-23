let list = [];
let museum = [];



// window.onload = () => {
//     console.log('geladen')
//     //getAllinfo();
//     getData();
// }


// class FetchGameApi{
//     constructor(){}
//    };

//    class FetchGameApi{
//     constructor(){}
      
//       static getGamesFetch(){};
      
//    };

//    static getGamesFetch(){
//     return fetch("http://localhost:3000/games")
//     .then( response => response.json() )
//   };


// // const contentTag = document.getElementById('content');
// // fetch('https://opendata.brussels.be/api/records/1.0/search/?dataset=museums-in-brussels&q=')
// //   .then(res => res.json())
// //   .then(data => {
// //     console.log(data)

// //     const jsonToString = JSON.stringify(data.museum);
// //     console.log('jsonToString', jsonToString);

// //     contentTag.textContent = `
// //     There are ${data.parameters.records.fields.naam_van_het_museum} astronauts in space, they are:
// //     ${JSON.stringify(data.museum)}
// //     `;
// //     console.log("name", data.museum);
// //   });



//     // content.innerHTML += `
    
//     // <h1> ${info.fields.naam_van_het_museum}</h1>
//     // <p> ${info.fields.adres}</p>
//     // <p> ${info.fields.adresse}</p>
//     // <p> ${info.fields.e_mail}</p>
//     // <p> ${info.fields.facebook}</p>`

async function getData (){
await fetch("https://opendata.brussels.be/api/records/1.0/search/?dataset=museums-in-brussels&q=")
.then(resp => resp.json())
.then(data => {
    list.push(data.records)
    //loop
});
}
console.log(list);

window.onload =() => {
    console.log("page loaded");
    getData();

    setTimeout(buildList, 1000);

    function buildList(){
        list.forEach(data => {
            data.forEach(data1 => {
                console.log(data1);
                let content = document.getElementById("museum-data");
                content.innerHTML += `
                <div id="allObjects" class="homepages">
                <div class="museumsimg">

                <a href="./items.html"><img src="./images/jong publiek.jpeg" alt=""></a>
                <h2>${data1.fields.naam_van_het_museum}</h2>
                <h2>${data1.fields.adres}</h2>
                </div>
                </div>

                `;
            })
           
        })
    }
}

// let list = [];
// let people= [];

// async function getData() {
//   await fetch('https://swapi.dev/api/people')
//   .then(resp => resp.json())
//   .then (data => {
//       list = data.results;
//       // LOOP 
//       list.forEach(starWars =>{
//           fetch(starWars.url)
//           .then (resp => resp.json())
//           .then(dataObj => {
//               people.push(dataObj);
//   
//           });
//       });
//   
//   });
// }
  





// window.onload = () => {
//     async function getData(){
//         const resp = await fetch('https://opendata.brussels.be/api/records/1.0/search/?dataset=museums-in-brussels&q=');
//         const data = await resp.json();

//         document.getElementById('museum-data').innerText = JSON.stringify(data);
//         console.log(data);
//        }

//        getData();
// }






// async function getAllinfo() {
//     let response = await fetch('https://opendata.brussels.be/api/records/1.0/search/?dataset=museums-in-brussels&q=')
//     return await response.json()
//     .then(data => {
//     console.log(data)
//     let content = document.getElementById("museum-data")
//     let info = data.records[0]
    
//     content.innerHTML += `
//     <h1> ${info.fields.naam_van_het_museum}</h1>
//     <p> ${info.fields.adres}</p>
//     <p> ${info.fields.adresse}</p>
//     <p> ${info.fields.e_mail}</p>
//     <p> ${info.fields.facebook}</p>`
    
//     })
//     }
    
//     getAllinfo();
