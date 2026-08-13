document.addEventListener("DOMContentLoaded", function () {

    loadHeader();
    loadFooter();

});


/* =========================================
   LOAD HEADER
========================================= */

function loadHeader() {

    const headerContainer =
        document.getElementById("header-container");

    if (!headerContainer) {
        return;
    }

    fetch("header.html")
        .then(function (response) {

            if (!response.ok) {
                throw new Error(
                    "Unable to load header.html"
                );
            }

            return response.text();
        })
        .then(function (html) {

            headerContainer.innerHTML = html;

            setActiveNavigation();

        })
        .catch(function (error) {

            console.error(
                "Error loading header:",
                error
            );

        });

}


/* =========================================
   LOAD FOOTER
========================================= */

function loadFooter() {

    const footerContainer =
        document.getElementById("footer-container");

    if (!footerContainer) {
        return;
    }

    fetch("footer.html")
        .then(function (response) {

            if (!response.ok) {
                throw new Error(
                    "Unable to load footer.html"
                );
            }

            return response.text();
        })
        .then(function (html) {

            footerContainer.innerHTML = html;

        })
        .catch(function (error) {

            console.error(
                "Error loading footer:",
                error
            );

        });

}


/* =========================================
   MOBILE NAVIGATION
========================================= */

function toggleNav() {

    const navMenu =
        document.getElementById("nav-menu");

    const menuButton =
        document.querySelector(".menu-toggle");

    if (!navMenu) {
        return;
    }

    const isOpen =
        navMenu.classList.toggle("nav-open");

    if (menuButton) {

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    }

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

function setActiveNavigation() {

    const navLinks =
        document.querySelectorAll(
            "#nav-menu a[data-page]"
        );

    let currentPage =
        window.location.pathname
            .split("/")
            .pop();

    /*
     * If the browser URL ends without
     * a filename, treat it as index.html.
     */
    if (!currentPage) {
        currentPage = "index.html";
    }

    navLinks.forEach(function (link) {

        const page =
            link.getAttribute("data-page");

        if (page === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

}


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

document.addEventListener("click", function (event) {

    const clickedLink =
        event.target.closest("#nav-menu a");

    if (!clickedLink) {
        return;
    }

    const navMenu =
        document.getElementById("nav-menu");

    const menuButton =
        document.querySelector(".menu-toggle");

    if (navMenu) {

        navMenu.classList.remove("nav-open");

    }

    if (menuButton) {

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});