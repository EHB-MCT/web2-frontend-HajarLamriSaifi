
//  kaart :  https://opendata.brussel.be/explore/embed/dataset/musea-in-brussel/map/?location=12,50.87997,4.36569

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
    
    getAllinfo();


    