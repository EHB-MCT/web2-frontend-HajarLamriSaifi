let list = [];
let museum = [];


window.onload = () => {
    console.log('geladen')
    getAllinfo();
    // getData();


}

// async function getData(){
//     await fetch('https://opendata.brussels.be/api/records/1.0/search/?dataset=museums-in-brussels&q=')
//     .then (resp => resp.json())
//     .then(data => {
//         list = data.results;
//         // een loop
//         list.forEach(element => {
//             fetch(element.url)
//             .then(resp => resp.json())
//             .then(data =>{
//                 museum.push(data);
//             })
            
//         });
//     })
// }



async function getAllinfo() {
    let response = await fetch('https://opendata.brussels.be/api/records/1.0/search/?dataset=museums-in-brussels&q=')
    return await response.json()
    .then(data => {
    console.log(data)
    let content = document.getElementById("data")
    let info = data.records[0]
    
    content.innerHTML += `
    
    <h1> ${info.fields.naam_van_het_museum}</h1>
    <p> ${info.fields.adres}</p>
    <p> ${info.fields.adresse}</p>
    <p> ${info.fields.e_mail}</p>
    <p> ${info.fields.facebook}</p>`
    
    })
    }
    
   




    