
// event listeners for the hamburger menu
document.addEventListener("DOMContentLoaded", function() {
    const menuImg = document.querySelector(".menu img");
    const nav = document.querySelector("nav");

    menuImg.addEventListener("click", function() {
        if (nav.classList.contains("active")) {
            nav.classList.remove("active");
        } else {
            nav.classList.add("active");
        }
    });
});

// event listeners for the services section

document.querySelector(".services .cats .cat1").style.backgroundColor = "rgb(53, 37, 16)";
document.querySelector(".services .cats .cat1").style.color = "white";


let activeElement = document.querySelector(".services .cats .cat1");
let data = document.querySelector(".cat-data")

document.querySelectorAll(".cat").forEach(e=>{
    
    e.addEventListener("click", function(){

        if (activeElement) {
            activeElement.style.backgroundColor = "white";
            activeElement.style.color = "black";
        }
        this.style.backgroundColor = "rgb(53, 37, 16)";
        this.style.color = "white";

        activeElement = this;

        // changing the content as per the category
        if(this.classList.contains("cat1")){
            data.querySelector(".p1 h4").innerHTML = "Customized yoga routines based on individual needs and health conditions."
            
            data.querySelector(".p2 h4").innerHTML = "One-on-one guidance to ensure proper technique and alignment."
        }
        else if(this.classList.contains("cat2")){
            data.querySelector(".p1 h4").innerHTML = "Techiques to improve respiratory function, reduce stress, and enhance mental clarity."

            data.querySelector(".p2 h4").innerHTML = "Guided breathing exercises tailored to individual needs."
        }
        else if(this.classList.contains("cat3")){
            data.querySelector(".p1 h4").innerHTML = "Techniques to reduce stress, anxiety, and depression."
            
            data.querySelector(".p2 h4").innerHTML = "Guided meditations to improve focus, relaxation, and emotional balance."
        }
        else{
            data.querySelector(".p1 h4").innerHTML = "Advice on integrating yoga principles into daily life."
            
            data.querySelector(".p2 h4").innerHTML = "Guidance on nutrition, sleep, and stress management."
        }
    })
})