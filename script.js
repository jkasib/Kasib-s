// Menu button 

let menuBtn = document.querySelector("#menu-button");
let navbar = document.querySelector(".navbar");


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});




// Search button 

let search = document.querySelector("#search-button");
let close = document.querySelector("#close");
let searchDiv = document.querySelector(".searchDiv");

search.onclick = () => {
    searchDiv.classList.add('search-active');
}

close.onclick = () => {
    searchDiv.classList.remove('search-active');
}



// Carousel 

let slide1 = document.querySelector('.slide1');
let slide2 = document.querySelector('.slide2');
let slide3 = document.querySelector('.slide3');



slide1.style.transform = "translateX(0%)";



const carouselFunc = () => {
    
    

    setTimeout(() => {
        slide1.style.transform = "translateX(120%)";        
        slide2.style.transform = "translateX(0%)"; 
        
        
    }, 4000)

    setTimeout(() => {
        slide2.style.transform = "translateX(120%)";        
        slide3.style.transform = "translateX(0%)";
        
        
    }, 8000)

    setTimeout(() => {
        slide3.style.transform = "translateX(120%)";        
        slide1.style.transform = "translateX(0%)";
        
        
    }, 12000)

}



    carouselFunc();    
    setInterval(carouselFunc, 12000);




// Scrolling

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


let home = document.getElementById('home');
let dishes = document.getElementById('dishes');
let about = document.getElementById('about');

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    let windo = window.pageYOffset;


    if(dishes.offsetTop <= windo && about.offsetTop > windo){
        console.log("dishes");
    }
    else if(about.offsetTop <= windo){
        console.log("about");
    }
    else {
        console.log("home");
        
    }




}

const loader = () => {
    document.querySelector('.loader-content').classList.add('fade-out');
}

const fadeOut = () => {
    setInterval(loader, 3000);
}

window.onload = () => {
    fadeOut();
}


