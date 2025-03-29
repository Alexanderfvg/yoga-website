document.addEventListener("DOMContentLoaded", function () {

    
    const burgerMenu = document.getElementById("burger-menu");
    const navMenu = document.getElementById("nav-menu");

    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener("click", function() {
            navMenu.classList.toggle("show"); 
        });
    } else {
        console.warn("Burger menu or nav menu element not found.");
    }

   
    const testimonials = document.querySelectorAll(".testimonial-card"); 
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    let currentIndex = 0;
    let autoSlideInterval = null; 

   
    function showTestimonial(index) {
        if (testimonials.length === 0) return; 

        testimonials.forEach((testimonial, i) => {
            
            testimonial.style.display = 'none';
        });
        
        testimonials[index].style.display = 'block'; 
    }

    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    
    function startAutoSlide(delay = 5000) {
         
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
        if (testimonials.length > 1) { 
            autoSlideInterval = setInterval(nextSlide, delay);
        }
    }

    
    if (testimonials.length > 0) {
        
        showTestimonial(currentIndex);

        
        if (nextBtn && prevBtn) {
            nextBtn.addEventListener("click", function () {
                nextSlide();
                startAutoSlide(); 
            });

            prevBtn.addEventListener("click", function () {
                prevSlide();
                startAutoSlide(); 
            });
        } else {
            console.warn("Next or Previous button not found for testimonials.");
        }

      
        startAutoSlide();

    } else {
        console.warn("No elements found with the class '.testimonial-card'.");
        
        if(nextBtn) nextBtn.style.display = 'none';
        if(prevBtn) prevBtn.style.display = 'none';
         const controlsContainer = document.querySelector('.slider-controls');
         if(controlsContainer) controlsContainer.style.display = 'none';
    }

}); 