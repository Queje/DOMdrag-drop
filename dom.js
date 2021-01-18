// ----------------------------------
// select the button and panel elements in the tab menu and a js function displaying the panels.
//-----------------------------------
const tabbuttons = document.querySelectorAll(".tabcontainer .buttoncontainer button");
const tabpanels = document.querySelectorAll("div.tabcontainer > div.tabpanel");

function showpanel(panelindex, colorcode) {
    tabpanels.forEach(node => {
        node.style.display="none";
    });
    tabpanels[panelindex].style.display="block";
    tabpanels[panelindex].style.backgroundColor=colorcode;

    tabbuttons.forEach(node =>{
        node.style.backgroundColor="";
    })
    tabbuttons[panelindex].style.backgroundColor=colorcode;
};

showpanel(0,"darkgray");

// ----------------------------------
// working on a change onclick menu in panel[1]
//-----------------------------------

var main_courses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"]
var techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"]
var sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"]
var seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"]


function changeMenu(){
    const random_main_course = main_courses[Math.floor(Math.random()*main_courses.length)]
    const random_technique = techniques[Math.floor(Math.random()*techniques.length)]
    const random_side = sides[Math.floor(Math.random()*sides.length)]
    const random_seasoning = seasonings[Math.floor(Math.random()*seasonings.length)]
    
    const menu = `${random_main_course} ${random_technique}, avec ${random_side} ${random_seasoning}`
    
    const tabMenu = document.querySelector(".tabcontainer .tabpanel .menu")
    
    tabMenu.innerHTML = `<h6>le menu Spécial du chef:</h6><p>${menu}</p>`
};
// ----------------------------------
// working on an exit pop-up
//-----------------------------------

const show = () => {
    const element = document.querySelector("#popup")
    const body = document.querySelector("body")
    element.style.display = "block"
    element.style.opacity = "1"
    element.style.transform = "scale(1)"
    element.style.transition = "0.4s, opacity 0.4s"
    body.style.opacity="0.5"
};
  
function hide(){
    const element = document.querySelector("#popup")
    element.style.display="none"
    element.style.transform = "scale(0.5)"
    element.style.transition = "0.2s, opacity 0.2s, visibility 0s 0.2s"
    const body = document.querySelector("body")
    body.style.opacity="1"
};

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mouseout", (event) => {
        if (!event.toElement && !event.relatedTarget) {
        setTimeout(() => {
            show()
        }, 1000)
        }
    })
    document.addEventListener("click", (action) => {
        hide();
    })
});
//-----------------------------------
// working on a drag & drop function
//-----------------------------------

function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.currentTarget.style.backgroundColor = 'yellow';
};

function onDragOver(event) {
    event.preventDefault();
};

function onDrop(event) {
    const id = event.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();
}