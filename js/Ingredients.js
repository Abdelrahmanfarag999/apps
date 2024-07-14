let ingArr = [];

async function geting() {
    try {
        let loadPage = document.querySelector(".loading")
        loadPage.classList.remove('d-none')
        const urling = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        const resIng = await urling.json();
        ingArr = resIng.meals;
        displayIng();
        loadPage.classList.add('d-none')
        console.log(ingArr);
    } catch (error) {
        console.error('Error fetching Ingredients:', error);
    }
}

let IngredientsShow = document.querySelector("#IngredientsShow");

function displayIng() {
    let box = '';
    for (let i = 0; i < ingArr.length; i++) {
        box += `<div class="col-md-3 text-white d-flex flex-column justify-content-center align-items-center pt-3">
                    <i class="fa-solid fa-drumstick-bite"></i>
                    <h2 class="py-2"> ${ingArr[i].strIngredient}</h2>
                    <p class="text-center">${ingArr[i].strDescription}</p>
                </div>
            `;
    }
    IngredientsShow.innerHTML = box;
}
// 
geting()