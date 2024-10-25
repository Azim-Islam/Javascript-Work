const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')
const toggleSw = document.querySelector('input[type="checkbox"]')


const darkBg = 'rgb(0 0 0 / 50%)'
const ligthBg = 'rgb(255 255 255 / 50%)'



function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.remove('fa-sun')
    toggleIcon.children[1].classList.add('fa-moon')
    image1.src = 'img/undraw_proud_coder_dark.svg'
    image2.src = 'img/undraw_conceptual_idea_dark.svg'
    image3.src = 'img/undraw_feeling_proud_dark.svg'
}

function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src = 'img/undraw_proud_coder_light.svg'
    image2.src = 'img/undraw_conceptual_idea_light.svg'
    image3.src = 'img/undraw_feeling_proud_light.svg'

}


function switchTheme(event){
    if (event.target.checked) {
        document.body.setAttribute('data-theme', 'dark')
        darkMode()
        window.localStorage.setItem('theme', 'dark')
    }
    else{
        document.body.setAttribute('data-theme', 'light')
        lightMode()
        window.localStorage.setItem('theme', 'light')
    }
}

document.addEventListener("DOMContentLoaded", () => {


    toggleSw.addEventListener('change', switchTheme)

    if (localStorage.getItem('theme') !== null){
        if (localStorage.getItem('theme') === 'dark'){
            toggleSw.checked = true
            let newEvent = new Event('change')
            toggleSw.dispatchEvent(newEvent)
        }
    } 


  });

