import "../css/style.css"

const sliderLine = document.querySelectorAll('.slider-line');
const sliderImages = document.querySelectorAll('.banner');
const sliderDots = document.querySelectorAll('.dots');

let sliderIndex = 0;
let sliderWidth;

window.addEventListener('resize',showSlide);

function showSlide(){
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

function rollSlider(){
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index){
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

sliderDots.forEach((dot,index) =>{
    dot.addEventListener('click', () =>{
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
    })
})