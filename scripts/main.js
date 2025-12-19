document.addEventListener("DOMContentLoaded", () => {
    const offset = 50;

    function scrollToTarget(target) {
        if (target && target.startsWith("#")) {
            const el = document.querySelector(target);
            if (!el) return;
            const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        }
    }

    document.addEventListener("click", (event) => {
        const link = event.target.closest("a");
        if (!link) return;
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
            event.preventDefault();
            scrollToTarget(href);
        }
    });
});
