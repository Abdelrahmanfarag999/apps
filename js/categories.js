
let allcats = [];

async function getCats() {
    try {
        let loadPage = document.querySelector(".loading")
        loadPage.classList.remove('d-none')
        const urlCat = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const resCats = await urlCat.json();
        allcats = resCats.categories;
        displayCat();
        loadPage.classList.add('d-none')

        console.log(allcats);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

let catContent = document.querySelector("#catContent");

function displayCat() {
    let box = '';
    for (let i = 0; i < allcats.length; i++) {
        box += `
            <div class="meals col-md-3 pt-3 overflow-hidden">
                <div class="box position-relative">
                    <div class="mealBox rounded-3 overflow-hidden">
                        <img src="${allcats[i].strCategoryThumb}" alt="">
                    </div>
                    <div class="layer position-absolute w-100 h-100 d-flex align-items-center flex-column rounded-3 px-3 overflow-hidden text-center">
                        <h2 class="pt-5">${allcats[i].strCategory}</h2>
                        <p>${allcats[i].strCategoryDescription.split(" ").slice(0,15).join("")}.</p>
                    </div>
                </div>
            </div>`;
    }
    catContent.innerHTML = box;
}

getCats();
