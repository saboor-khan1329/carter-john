window.onload = function () {
    setTimeout(() => {
        let preloader = document.getElementById("preloader");

        // Apply fade-out effect
        preloader.style.opacity = "0";
        preloader.style.transition = "opacity 1s ease-out";

        // Wait for transition to finish before hiding the preloader
        setTimeout(() => {
            preloader.style.display = "none";
            document.getElementById("content").style.display = "block";
        }, 1000); // Matches the transition duration
    }, 1000); // Delay before starting fade-out
};



const panels = document.querySelectorAll('.sec-3-panels');
const includesShow = document.querySelectorAll('#includes-show');

if (panels.length > 0) {
    
    panels[0].classList.add('active');
    panels[0].style.flex = "2";
    if (includesShow[0]) {
        includesShow[0].style.opacity = "1";
        includesShow[0].style.visibility = "visible";
    }

    includesShow.forEach((include, index) => {
        if (index !== 0) {
            include.style.opacity = "0";
            include.style.visibility = "hidden";
        }
    });

    panels.forEach((panel, index) => {
        panel.addEventListener('mouseover', () => {
            panels.forEach((p, i) => {
                p.style.flex = "1";
                p.classList.remove('active');
                if (includesShow[i]) {
                    includesShow[i].style.opacity = "0";
                    includesShow[i].style.visibility = "hidden";
                }
            });

            panel.style.flex = "2";
            panel.classList.add('active');
            if (includesShow[index]) {
                includesShow[index].style.opacity = "1";
                includesShow[index].style.visibility = "visible";
            }
        });

        panel.addEventListener('mouseout', () => {
            panels.forEach(p => {
                p.style.flex = "1";
                p.classList.remove('active');
            });

            panels[0].style.flex = "2";
            panels[0].classList.add('active');

            includesShow.forEach((include, i) => {
                if (i === 0) {
                    include.style.opacity = "1";
                    include.style.visibility = "visible";
                } else {
                    include.style.opacity = "0";
                    include.style.visibility = "hidden";
                }
            });
        });
    });
}



// review swiper
var swiper = new Swiper("#sec-5-review-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true, 
    autoplay: {
        delay: 2500, 
        disableOnInteraction: false, 
    },
    breakpoints: {
        320: { 
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: { 
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: { 
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});


//   mobile menu

function toggleMenu() {
    var menu = document.getElementById("slideMenu");
    menu.classList.toggle("active");

}

//   mobile menu sticky

function toggleMenu_sticky() {
    var menu = document.getElementById("slideMenu_sticky");
    menu.classList.toggle("active");

}


// booking button popup

// function openPopup() {
//     document.getElementById("popup").style.display = "flex";
// }
// function closePopup() {
//     document.getElementById("popup").style.display = "none";
// }


// sticky menu


let lastScrollTop = 0;
const stickyNav = document.getElementById("stickyHiddenNav");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop === 0) {
        stickyNav.style.transform = "translateY(-100%)";
    } else if (scrollTop < lastScrollTop) {
        stickyNav.style.transform = "translateY(0)";
    } else {
        stickyNav.style.transform = "translateY(-100%)";
    }
    
    lastScrollTop = scrollTop;
});








