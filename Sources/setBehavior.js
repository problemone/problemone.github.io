const bodyElement = document.querySelector("body");
const backgroundElement = document.querySelector(".background");
const backgroundTravelling = document.querySelector(".backgroundTravelling");
const buttonElement = document.querySelector(".Btn");
const backgroundMinColor = [85, 83, 76];
const colorScale = 120;
let targetColor = backgroundMinColor;
let imageRot = 0;

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

function setBehavior(){   
    // Hide scrollbar if window is at the top
    window.addEventListener('scroll', () => {
        let fadeInElements = document.getElementsByClassName('fadeIn');
        let relScreenPos = 0;

        for(let i = 0; i < fadeInElements.length; i++){
            let elementBoundingRect = fadeInElements[i].getBoundingClientRect();
            let scale = 0.4;
            relScreenPos = 1-Math.max(0, Math.min((document.documentElement.scrollTop + elementBoundingRect.y - window.scrollY - window.innerHeight * (1-scale))/(window.innerHeight * scale), 1));

            fadeInElements[i].style.opacity = relScreenPos;
        }
    });
}

setBehavior();