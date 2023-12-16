//Start Landing Text Animation
let textBox = document.querySelector('.text-box');

let currntNum = 1;

setInterval (function () {

    textBox.style.left = `-${currntNum * 100}%`;

    if ( currntNum < 3) {

        currntNum++;

    } else {
        currntNum = 1;
        textBox.style.left = `0%`;
    }
    
}, 5000)



//Start Testimonials Animation
let slide = document.querySelector('.slide');
let leftButton = document.querySelector(".left");
let rightButton = document.querySelector(".right");

let slideindexright = 1;
slideindexleft = 1;

rightButton.addEventListener("click", () => {
    if (slideindexright < 2) {

        slide.style.transform = `translate(-50%)`;
        slideindexright++;
        slideindexleft--;
    };
    console.log(slideindexright)
    console.log(slideindexleft)
});

leftButton.addEventListener("click",() => {
    if (slideindexleft < 2) {

        slide.style.transform = `translate(0%)`;
        slideindexleft++;
        slideindexright--
    };
    console.log(slideindexleft)
    console.log(slideindexright)
});


//Scroll To Top

document.onscroll = function () {

    console.log(scrollY)
    if (scrollY > 1600 ){

        document.querySelector('.topscroll').style.right = "35px";

    } else {

        document.querySelector('.topscroll').style.right = "-45px";

    };

};

document.querySelector('.topscroll').addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
