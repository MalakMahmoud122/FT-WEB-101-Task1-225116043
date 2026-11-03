const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    
    
    if (document.body.classList.contains("dark")) {
        themeButton.innerHTML = '<span class="icon">☀️</span> Mode';
    } else {
        themeButton.innerHTML = '<span class="icon">🌙</span> Mode';
    }
});