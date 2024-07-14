let getarea = []
async function getareas() {
    try {
        let loadPage = document.querySelector(".loading")
        loadPage.classList.remove('d-none')
        const urlarae = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const resarea = await urlarae.json();
        getarea = resarea.meals;
        displayAreas();
        loadPage.classList.add('d-none')
        console.log(getarea);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}
let showareas = document.querySelector("#showareas");

function displayAreas() {
    var box = ``
    for (let i = 0; i < getarea.length; i++) {
        box += `<div class=" area col-md-3 d-flex flex-column justify-content-center align-items-center ">
                    <img class="w-25 m-auto" src="../imgs/vecteezy_3d-home-icon_21948181.png" alt="">
                    <h2 class="  text-white">${getarea[i].strArea}</h2>
                </div>`
    }
    showareas.innerHTML = box
}
getareas()