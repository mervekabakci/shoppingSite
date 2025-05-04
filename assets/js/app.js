//preloader variable
var preloader = document.getElementById("preloader");

window.addEventListener("load", ()=> {
    //windows yuklendikten sonra preloader silinir. 
    preloader.remove();
    document.querySelector("body").classList.remove("overflow-hidden")
})

//header fixed
var header = document.getElementById("header");

window.addEventListener("scroll", ()=> {
    var header = document.getElementById("header");
    var headerHeight = header.offsetHeight+"px";
    console.log("haight :" + headerHeight)

    window.pageYOffset || document.documentElement.scrollTop > headerHeight ? header.classList.add("fixed") : header.classList.remove("fixed")
    
})

//Window scroll

/*aod init*/
AOS.init({
    easing: 'ease',
    once: true,
});