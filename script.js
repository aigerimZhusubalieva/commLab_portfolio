var landingPage = document.querySelector(".landingPage");

AOS.init();

landingPage.addEventListener("click", function(){
    landingPage.classList.add("closeLanding");
});