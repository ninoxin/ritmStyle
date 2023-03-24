const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.header__btn')
const closeBtn = document.querySelector('.modal__close')

modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
}) 
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
}) 


// slider
// slides
// dots

const sliderBlock = document.querySelector('.slider')
const slides = document.querySelectorAll('.slides')
const dots = document.querySelectorAll('.dot')
let currentSlide = 0

sliderBlock.addEventListener('click', (event) =>{
    slides[currentSlide].classList.remove('slides-active')
    dots[currentSlide].classList.remove('dot-active')

    if (event.target.classList.contains('dot')) {
        dots.forEach((dot, index)=>{
            if (event.target === dot) {
                currentSlide = index
            }
        })
    }

    slides[currentSlide].classList.add('slides-active')
    dots[currentSlide].classList.add('dot-active')
})