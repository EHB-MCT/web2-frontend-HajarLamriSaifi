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
                <div class="museumOne">
                <a href="./items.html"><img src="./images/jong publiek.jpeg" alt=""></a>
                <h2>${data1.fields.naam_van_het_museum}</h2>
                </div>
                </div>
                `;

            })
           
        })
    }
}

