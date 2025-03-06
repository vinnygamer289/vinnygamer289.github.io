document.querySelector('.share-btn').addEventListener('click', function () {
    navigator.clipboard.writeText(window.location.href).then(function () {
        alert('Link has been copied to clipboard!');
    }).catch(function (err) {
        console.error('Cannot copy link: ', err);
        alert('Link cannot be copied. Please try again.');
    });
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