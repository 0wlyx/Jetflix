const elements = document.getElementsByClassName("navbar");
const element = elements[0]; 

window.addEventListener('scroll', () => {

const scrollPos = window.scrollY;

if(scrollPos > 50){
    element.style.backgroundColor = 'black';
    element.style.transition = 'background 0.3s ease-in-out';
}
else{
    element.style.background = 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(88,88,88,0) 100%)';
    element.style.transition = 'background 0.3s ease-in-out';
}
});
