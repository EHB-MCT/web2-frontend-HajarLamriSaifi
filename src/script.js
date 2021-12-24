let list = [];
let museum = [];

async function getData (){
await fetch("https://opendata.brussels.be/api/records/1.0/search/?dataset=museums-in-brussels&q=")
.then(resp => resp.json())
.then(data => {
    list.push(data.records)});
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