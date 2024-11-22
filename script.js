document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("More details coming soon!");
    });
});

// Animate cards on scroll
window.addEventListener('scroll', () => {
    const menuCategories = document.querySelectorAll('.menu-category');
    menuCategories.forEach((category, index) => {
        const position = category.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            category.style.transition = `transform 0.4s ${index * 0.1}s ease`;
            category.style.transform = "translateY(0)";
        }
    });
});
