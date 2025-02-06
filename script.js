const panels = document.querySelectorAll('.sec-3-panels');
const includesShow = document.querySelectorAll('#includes-show');

// Initial setup
if (panels.length > 0) {
    // Set the first panel to flex: 2, active, and ensure its #includes-show is visible
    panels[0].classList.add('active');
    panels[0].style.flex = "2";
    if (includesShow[0]) {
        includesShow[0].style.opacity = "1";
        includesShow[0].style.visibility = "visible";
    }

    // Hide all other includes-show elements by default
    includesShow.forEach((include, index) => {
        if (index !== 0) {
            include.style.opacity = "0";
            include.style.visibility = "hidden";
        }
    });

    panels.forEach((panel, index) => {
        panel.addEventListener('mouseover', () => {
            // Shrink all panels and remove the active class
            panels.forEach((p, i) => {
                p.style.flex = "1";
                p.classList.remove('active');
                if (includesShow[i]) {
                    includesShow[i].style.opacity = "0";
                    includesShow[i].style.visibility = "hidden";
                }
            });

            // Expand the hovered panel and mark it active
            panel.style.flex = "2";
            panel.classList.add('active');
            if (includesShow[index]) {
                includesShow[index].style.opacity = "1";
                includesShow[index].style.visibility = "visible";
            }
        });

        panel.addEventListener('mouseout', () => {
            // Reset all panels to flex: 1
            panels.forEach(p => {
                p.style.flex = "1";
                p.classList.remove('active');
            });

            // Ensure the first panel remains expanded and active
            panels[0].style.flex = "2";
            panels[0].classList.add('active');

            // Ensure the first panel's #includes-show remains visible
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
    loop: true, // Enables looping
    autoplay: {
        delay: 2500, // Auto-plays every 3 seconds
        disableOnInteraction: false, // Keeps autoplay active even after user interaction
    },
    breakpoints: {
        320: { // For small screens (phones)
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: { // For tablets
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: { // For desktops
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



// booking button popup

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}


// sticky menu


// let lastScrollTop = 0;
// const menu = document.getElementById("stickyMenu");
// const menuList = document.getElementById("menuList");

// window.addEventListener("scroll", function () {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop) {
//         menu.style.top = "-60px";
//     } else {
//         menu.style.top = "0";
//     }
//     if (scrollTop === 0) {
//         menu.style.top = "-60px";
//     }
//     lastScrollTop = scrollTop;
// });

// function toggleMenu() {
//     if (menuList.classList.contains("show")) {
//         menuList.style.opacity = "0";
//         menuList.style.transform = "scaleY(0)";
//         setTimeout(() => {
//             menuList.classList.remove("show");
//         }, 300);
//     } else {
//         menuList.classList.add("show");
//         setTimeout(() => {
//             menuList.style.opacity = "1";
//             menuList.style.transform = "scaleY(1)";
//         }, 10);
//     }
// }



