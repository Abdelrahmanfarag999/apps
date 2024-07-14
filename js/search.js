// searccch______________
let allRes = [];
let allResForChar = [];

let searchBtn = document.querySelector("#searchBtn");
let charSearch = document.querySelector('#charSearch');
let getRes = document.querySelector("#searchMeals");

searchBtn.addEventListener('click', async function search() {
    let loadPage = document.querySelector(".loading")
    loadPage.classList.remove('d-none')
    let searchMeal = document.querySelector("#mealSearch").value.trim();
    let fullNameMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`);
    const resSeaerchM = await fullNameMeal.json();
    allRes = resSeaerchM.meals || [];

    displaySearchResults();
    loadPage.classList.add('d-none')

});

charSearch.addEventListener('input', async function () {
    let inputValue = this.value.trim();
    let loadPage = document.querySelector(".loading")
    loadPage.classList.remove('d-none')
    if (inputValue.length === 1 && /^[a-zA-Z]$/.test(inputValue)) {


        let fullNameMealChar = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`);
        const resSearchMChar = await fullNameMealChar.json();
        allResForChar = resSearchMChar.meals || [];
    } else {
        allResForChar = [];
    }
    displaySearchResults();
    loadPage.classList.add('d-none')

});

function displaySearchResults() {
    let box = '';
    let resultsToDisplay = allResForChar.length > 0 ? allResForChar : allRes;
    for (let i = 0; i < resultsToDisplay.length; i++) {
        box += `<div class="meals col-md-3 pt-5 overflow-hidden">
                    <div class="box position-relative">
                        <div class="mealBox rounded-3 overflow-hidden">
                            <img src="${resultsToDisplay[i].strMealThumb}" alt="">
                        </div>
                        <div class="layer position-absolute w-100 h-100 d-flex align-items-center rounded-3 px-3 overflow-hidden">
                            <h2>${resultsToDisplay[i].strMeal}</h2>
                        </div>
                    </div>
                </div>`;
    }

    getRes.innerHTML = box;
}
