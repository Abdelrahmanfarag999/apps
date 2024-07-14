


// side bar
$(document).ready(function () {
    $("#menu-btn").click(function () {
        var sideMenu = $("#mySideMenu");
        if (sideMenu.hasClass("open")) {
            sideMenu.animate({ width: '0px' }, 500);
            sideMenu.removeClass("open");
            $("#menu-btn i").removeClass("fa-solid fa-xmark").addClass("fa-solid fa-bars");
            $("#mySideMenu ul").addClass("d-none");
            $("#mySideMenu .textNave").addClass("d-none");
        } else {
            sideMenu.animate({ width: '250px' }, 500);
            sideMenu.addClass("open");
            $("#menu-btn i").removeClass("fa-solid fa-bars").addClass("fa-solid fa-xmark");
            $("#mySideMenu ul").removeClass("d-none")
            $("#mySideMenu .textNave").removeClass("d-none")
        }
    });
});

// get meals for ui

let allmeals = [];

async function getMeals() {
    try {
        let loadPage = document.querySelector(".loading")
        loadPage.classList.remove('d-none')
        const url = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
        const res = await url.json();
        allmeals = res.meals;
        displayui();
        loadPage.classList.add('d-none')
        detalis()
    } catch (error) {
        console.error('Error fetching meals:', error);
    }
}

let dataMeals = document.querySelector("#dataMeals");

function displayui() {
    var box = ``;
    for (let i = 0; i < allmeals.length; i++) {
        box += ` <div class="meals col-md-3  pt-3 overflow-hidden ">
                    <div class="box position-relative ">
                        <div class="mealBox rounded-3 overflow-hidden">
                            <img  src="${allmeals[i].strMealThumb}" alt="">
                        </div>
                        <div class="layer position-absolute w-100 h-100 d-flex align-items-center rounded-3 px-3 overflow-hidden ">
                            <h2>${allmeals[i].strMeal}</h2>
                        </div>
                    </div>
                </div>`;
    }
    dataMeals.innerHTML = box;
}

getMeals();
//  /// contact vallidation
function validone() {

    const nameInput = document.getElementById('name');
    const validNameMessage = document.querySelector('.validName');
    nameInput.addEventListener('input', function () {
        const inputValue = this.value;
        if (/^[a-zA-Z]+$/.test(inputValue)) {
            validNameMessage.classList.add('d-none');
        } else {
            validNameMessage.classList.remove('d-none');
        }
    });
    return(true)
}
function validtwo() {
    const numberInput = document.getElementById('number');
    const validNumberMessage = document.querySelector('.validNumber');

    numberInput.addEventListener('input', function () {
        const inputValue = this.value;
        if (/^\d+$/.test(inputValue)) {
            validNumberMessage.classList.add('d-none');
        } else {
            validNumberMessage.classList.remove('d-none');
        }
    });return(true)
}
function validthree() {
    const passInput = document.getElementById('pass');
    const validPassMessage = document.querySelector('.validPass');

    passInput.addEventListener('input', function () {
        const inputValue = this.value;

        if (/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(inputValue)) {
            validPassMessage.classList.add('d-none');
        } else {
            validPassMessage.classList.remove('d-none');
        }
    });return(true)
}
function validemail() {
    const emailInput = document.getElementById('email');
    const validEmailMessage = document.querySelector('.validEmail');

    emailInput.addEventListener('input', function () {
        const inputValue = this.value;

        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputValue)) {
            validEmailMessage.style.display = 'none';
        } else {
            validEmailMessage.style.display = 'block';
        }
    });
    emailInput.addEventListener('input', function () {
        validEmailMessage.classList.add = 'd-block';
    });return(true)
}
function validage(){
    const ageInput = document.getElementById('age');
const validAgeMessage = document.querySelector('.validage');

ageInput.addEventListener('input', function () {
    const inputValueage = this.value;
    if (/^\d+$/.test(inputValueage)) {
        validAgeMessage.classList.add('d-none');
    } else {
        validAgeMessage.classList.remove('d-none');
    }
}); return (true)
}

validemail()
validone()
validtwo()
validthree()
validage()
// end valiidation 
// pages ----->
function pages() {
    document.querySelectorAll(".pages").forEach(link => {
        link.addEventListener("click", () => {
            link.classList.add("active")
        })
    })
}
// pages ()
function getpage() {
    document.addEventListener('DOMContentLoaded', function () {
        var pageLinks = document.querySelectorAll('.pages');

        pageLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                var targetId = this.getAttribute('href').substring(1);
                var sections = document.querySelectorAll('section[id]');
                sections.forEach(function (section) {
                    if (section.id === targetId) {
                        section.classList.remove('d-none');
                    } else {
                        section.classList.add('d-none');
                    }
                });
            });
        });
    });
}
getpage()
// detalis for meal ---->
function detalis() {
    document.querySelectorAll(".box").forEach((box) => {
        box.addEventListener("click", () => {
            let detalistab = document.querySelector("#Details")
            displayDetalis()
            detalistab.classList.remove("d-none")

            document.querySelector("#home").classList.add("d-none")

        })
    })
}
detalis()
let DetalisMeal = []
// async function getDetalis(id) {
//     const urlDet = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//     const resDet = await urlDet.json();
//     DetalisMeal = resDet.meals
//     console.log(DetalisMeal)
// }
async function getDetalis() {
    const urlDet = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
    const resDet = await urlDet.json();
    DetalisMeal = resDet.meals
    console.log(DetalisMeal)
}
getDetalis()
let detrow = document.querySelector("#DetailsTab")
function displayDetalis() {
    var boxdet = ``
    for (let i = 0; i < DetalisMeal.length; i++) {
        boxdet += `<div class="col-4 pt-5">
                    <img class=" rounded-3 " src="${DetalisMeal[i].strMealThumb}" alt=""> <br>
                    <h2 class="text-white">${DetalisMeal[i].strMeal}</h2>
                </div>
                <div class="col-8 text-white pt-5">
                    <h2>Instructions</h2>
                    <p>${DetalisMeal[i].strInstructions}</p>
                    <p class="fs-3">Area : <span>${DetalisMeal[i].strArea}</span></p>
                    <p class="fs-3">Category : <span>${DetalisMeal[i].strCategory}</span></p>
                    <p class="fs-3">Recipes : <span></span></p>
                    <div class="spans">
                        <span>${DetalisMeal[i].strMeasure1}</span>
                        <span>${DetalisMeal[i].strMeasure2}</span>
                        <span>${DetalisMeal[i].strMeasure3}</span>
                        <span>${DetalisMeal[i].strMeasure4}</span> 
                        <span>${DetalisMeal[i].strMeasure5}</span>
                        <span>${DetalisMeal[i].strMeasure6}</span>
                        <span>${DetalisMeal[i].strIngredient1}</span>
                        <span>${DetalisMeal[i].strIngredient2}</span>
                        <span>${DetalisMeal[i].strIngredient3}</span>
                        <span>${DetalisMeal[i].strIngredient4}</span>
                        <span>${DetalisMeal[i].strIngredient5}</span>
                        <span>${DetalisMeal[i].strIngredient6}</span>
                        
                    </div>
                    <h3 class="pb-3">Tags : ${DetalisMeal[i].strTags}</h3>
                    <button onclick="window.location.href = 'https://routeegy.github.io/YummyExam/';" class="btn btn-success py-2">source</button> <button
                        onclick="window.location.href = '${DetalisMeal[i].strYoutube}';" class="btn btn-danger py-2">youtube</button>
                </div>`
    }
    detrow.innerHTML = boxdet
}
