const blurredImage = document.querySelectorAll(".blurred-img")
blurredImage.forEach(div => {
    const img = div.querySelector("img")
    function loaded() {
        div.classList.add("loaded")
    }

    if (img.complete) {
        loaded()
    } else {
        img.addEventListener("load", loaded)
    }
})

AOS.init();
var typed = new Typed(".multipleTxt", {
    strings: ["UI/UX Designer", "Graphics Designer", "Brand Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

const responsive = {
    480: {
        nav: true,
        dots: false,
    }
}
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 20000,
    items: 1,
    dots: true,
    nav: false,
    navText: [$(".owl-navigation .owl-nav-prev"), $(".owl-navigation .owl-nav-next")],
    responsive: responsive,
    // navigationText:false
})

// toggle
const toggle = document.querySelector(".toggle")
const phoneNav = document.querySelector(".phoneNav")
toggle.addEventListener("click", toggler)

function toggler() {
    const style = phoneNav.style.height;
    if (style == "0px") {
        phoneNav.style.height = "128.05px"
    }
    else {
        phoneNav.style.height = "0px"
    }
}

document.addEventListener("scroll", scrollFunction)
//
function scrollFunction() {
    if (window.innerWidth >= 460) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar2").style.position = "fixed";
            // document.getElementById("navbar2").style.backgroundColor = "white";
            document.getElementById("navbar2").style.opacity = "1";
        } else {
            document.getElementById("navbar2").style.opacity = "0";
        }
    }
}