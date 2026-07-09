function showMessage() {
    alert("Welcome to Cybersecurity Brief Website!");
}

// Smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

console.log("Cybersecurity Website Loaded Successfully");
