let list = [];
let museum = [];
let savedMuseum = [];
let newList = [];

list.forEach(element => {
    newList.push(element);
});

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
  
                <a href="./items.html"><img src="./images/jong publiek.jpeg" alt=""></a>
                <h2>${data1.fields.naam_van_het_museum}</h2>
                <btn href="#" id="${data1.recordid}" class="btn">add</btn>
               
                </div>
                `;
                console.log(data1.recordid);
            })
            document.querySelectorAll('.btn').forEach(item => {
                item.addEventListener('click', event => {
                 console.log("clicked");
                    let id = event.target.id;
                    console.log("this is the", id);
                    let additem = id;
                   console.log("part 2", additem);
                    savedMuseum.push(additem);
                    // saveditems(additem);
                });
            });
        })
    }
}
console.log("saved museums", savedMuseum);
console.log("the museums", list);


// function saveditems(addItem){
// const url = 'https://hajar-course-project-api.herokuapp.com/museum'
// const saveditem = {
    
// }

// const options = {
//     method: 'POST',
//     body: JSON.stringify(saveditem),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }

// fetch(url, options)
//         .then(res => res.json())
//         .then(res => console.log(res.name));
//     console.log("favoriteAdded")


// }
