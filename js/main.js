const menuToggle = document.querySelector(".vance-menu-toggle");
const mobileMenu = document.querySelector(".vance-mobile-menu");

menuToggle.addEventListener("click", () => { 
    const isOpen = mobileMenu.classList.toggle("is-open"); 
    
    menuToggle.setAttribute("aria-expanded", isOpen); 
    
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu"); 
    
    menuToggle.innerHTML = isOpen ? 
    '<i class="fa-solid fa-xmark"></i>' : 
    '<i class="fa-solid fa-bars"></i>'; 
});

console.log("hello..");
