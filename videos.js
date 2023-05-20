
// Get the divs containing each portfolio item
const portfolioItems = document.querySelectorAll('.js-video-button');
const modal = document.querySelector('.modal-video');

// Add an Event Listener for a click to each item

portfolioItems.forEach(item => {

    item.addEventListener('click', function(event) {
        
        // Stop the click event from propagating to the document object
        event.stopPropagation();

        // Get video url from the data-video-url attribute
        const videoUrl = item.getAttribute('data-video-url');

        modal.innerHTML = `
        <div class="modal">
            <iframe 
                src="${videoUrl}" 
                title="YouTube video player" 
                frameborder="0" 
                allow=
                "accelerometer; 
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture; 
                web-share" 
                allowfullscreen
            ></iframe>
        </div>
        `;

        // Show the modal
        modal.style.display = "flex";

        //Smooth Opacity Transition
        setTimeout(() => {
            modal.style.opacity = "1";
        }, 50);
    });
});


document.body.addEventListener('click', () => {
    if (modal.innerHTML !== '') {
        modal.innerHTML = '';

        modal.style.opacity = "0";

        setTimeout(() => {
            modal.style.display = "none";
        }, 450);
    } else {
        null;
    }
    
});
