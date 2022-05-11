var welcomeButton = document.querySelector(".welcomeButton");
var landingPage = document.querySelector(".landingPage");

AOS.init();

welcomeButton.addEventListener("click", function(){
    landingPage.classList.add("closeLanding");
});