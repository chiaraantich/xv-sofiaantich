document.querySelector(".scroll-down").addEventListener("click", function() {
    document.querySelector("#cuentaregresiva").scrollIntoView({
        behavior: "smooth"
    });
});