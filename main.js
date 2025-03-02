gsap.from(".profile img", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
        gsap.from(".addon", { duration: 1, opacity: 0, y: 20, stagger: 0.2, ease: "power2.out" });

        // Thêm chức năng sao chép link cho nút chia sẻ
        document.querySelector('.share-btn').addEventListener('click', function() {
            navigator.clipboard.writeText(window.location.href).then(function() {
                alert('Link has been copied to clipboard!');
            }).catch(function(err) {
                console.error('Cannot copy link: ', err);
                alert('Link cannot be copied. Please try again.');
            });
        });