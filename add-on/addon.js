let backToTop = document.getElementById("backToTop");

        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("contextmenu", function (event) {
            event.preventDefault();
        });
        let timeout;
        link.addEventListener("touchstart", function (event) {
            timeout = setTimeout(function () {
                event.preventDefault();
            }, 500);
        });

        link.addEventListener("touchend", function () {
            clearTimeout(timeout);
        });
        link.addEventListener("mousedown", function (event) {
            if (event.button === 2) {
                event.preventDefault();
            }
        });
    });
});