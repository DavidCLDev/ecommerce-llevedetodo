let userMenu = document.getElementById("menu-widget");
let wrapper = document.getElementById("wrapper");
let timeout = undefined;


wrapper.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    userMenu.classList.add("open-menu");
});

wrapper.addEventListener("mouseleave", () => {
    timeout = setTimeout(()=> {
        userMenu.classList.remove("open-menu");
    }, 300);
});