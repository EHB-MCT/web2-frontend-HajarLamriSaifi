(()=>{let e=[];console.log("this is the list",e),window.onload=()=>{console.log("page loaded"),async function(){await fetch("https://opendata.brussels.be/api/records/1.0/search/?dataset=museums-in-brussels&q=").then((e=>e.json())).then((s=>{e.push(s.records)}))}(),setTimeout((function(){e.forEach((e=>{console.log("data",e),e.forEach((e=>{console.log("this is data1",e),document.getElementById("museum-data").innerHTML+=` \n                <div class="museumsim">\n                \n                <a href="./items.html"><img src="/docs/images/${e.fields.naam_van_het_museum}.jpeg" alt="${e.fields.naam_van_het_museum}" width="500px" height="400px"></a>\n                <h2> ${e.fields.naam_van_het_museum}</h2>\n               \n                </div>\n                `}))}))}),1e3)}})(),(()=>{let e=[],s=[],o=[];e.forEach((e=>{o.push(e)})),console.log(e),window.onload=()=>{console.log("page loaded"),async function(){await fetch("https://opendata.brussels.be/api/records/1.0/search/?dataset=museums-in-brussels&q=").then((e=>e.json())).then((s=>{e.push(s.records)}))}(),setTimeout((function(){e.forEach((e=>{e.forEach((e=>{console.log(e),document.getElementById("museum-data").innerHTML+=` \n                <div class="museumsim">\n  \n                <a href="./items.html"><img src="/docs/images/${e.fields.naam_van_het_museum}.jpeg" alt="${e.fields.naam_van_het_museum}" width="500px" height="400px"></a>\n                <h2>${e.fields.naam_van_het_museum}</h2>\n                <button href="#" id="${e.recordid}" class="btn">save item</button>\n               \n                </div>\n                `,console.log(e.recordid)})),document.querySelectorAll(".btn").forEach((e=>{e.addEventListener("click",(e=>{console.log("clicked");let o=e.target.id;console.log("this is the",o);let n=o;console.log("part 2",n),s.push(n)}))}))}))}),1e3)},console.log("saved museums",s),console.log("the museums",e)})(),window.onload=()=>{console.log("page loaded"),async function(){await fetch("https://hajar-course-project-api.herokuapp.com/museum").then((e=>e.json())).then((e=>console.log(e)))}()};