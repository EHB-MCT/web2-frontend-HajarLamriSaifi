
async function getData(){
    await fetch('https://hajar-course-project-api.herokuapp.com/museum')
    .then (resp => resp.json())
    .then (data => console.log(data))

}

window.onload =() => {
    console.log("page loaded");
    getData();

  


}

