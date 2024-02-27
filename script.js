function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var reveals1 = document.querySelectorAll(".reveal1");
    var reveals2 = document.querySelectorAll(".reveal2");
    var reveals3 = document.querySelectorAll(".reveal3");
    var reveals4 = document.querySelectorAll(".reveal4");

    for (var i = 0; i < reveals.length; i++) {
        handleReveal(reveals[i], "active");
    }

    for (var j = 0; j < reveals1.length; j++) {
        handleReveal(reveals1[j], "active1");
    }

    for (var k = 0; k < reveals2.length; k++) {
        handleReveal(reveals2[k], "active2");
    }

    for (var l = 0; l < reveals3.length; l++) {
        handleReveal(reveals3[l], "active3");
    }

    for (var m = 0; m < reveals4.length; m++) {
        handleReveal(reveals4[m], "active4");
    }
}

function handleReveal(element, className) {
    var windowHeight = window.innerHeight;
    var elementTop = element.getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
        element.classList.add(className);
    } else {
        element.classList.remove(className);
    }
}

window.addEventListener("scroll", reveal);

window.addEventListener('scroll', function () {
    var header = document.querySelector('.container-section header');
    if (window.scrollY > 0) {
        header.classList.add('with-shadow');
    } else {
        header.classList.remove('with-shadow');
    }
});
