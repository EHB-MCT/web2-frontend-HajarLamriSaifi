let list = [];
let museum = [];



async function getData (){
await fetch("https://opendata.brussels.be/api/records/1.0/search/?dataset=museums-in-brussels&q=")
.then(resp => resp.json())  //consumer methode
.then(data => {
    list.push(data.records)});// pushe alle records naar de list array 
}

console.log("this is the list",list);


// alles in window.onload word uitgevoerd 
window.onload =() => {
    console.log("page loaded");
    getData();

    setTimeout(buildList, 1000);// voert na 1 sec de builtList 

// doen een dubbele for loop om aan de data te kunnen geraken
// omdat de eerste data weer een array toonde daarom nog een foreach om in die array te geraken 
    function buildList(){
        list.forEach(data => { 
            console.log("data",data);
            data.forEach(data1 => {
                console.log("this is data1",data1);
                let content = document.getElementById("museum-data");
                content.innerHTML +=   ` 
                <div class="museumsim">
                
                <a href="./items.html"><img src="/docs/images/${data1.fields.naam_van_het_museum}.jpeg" alt="${data1.fields.naam_van_het_museum}" width="500px" height="400px"></a>
                <h2> ${data1.fields.naam_van_het_museum}</h2>
               
                </div>
                `;

            })
           
        })
    }
}





//heroku 
// https://hajar-course-project-api.herokuapp.com/museums





