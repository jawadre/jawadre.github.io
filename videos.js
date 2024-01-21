const portfolioItems = document.querySelectorAll('.js-video-button');
const modal = document.querySelector('.modal-video');

portfolioItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation();

        const videoUrl = item.getAttribute('data-video-url');

        modal.innerHTML = `
        <div class="modal">
            <div class="video-container"></div>
        </div>
        `;

        const videoContainer = modal.querySelector('.video-container');

        // Create iframe element dynamically
        const iframe = document.createElement('iframe');
        iframe.src = videoUrl;
        iframe.title = "YouTube video player";
        iframe.frameBorder = 0;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;

        // Append the iframe to the video container
        videoContainer.appendChild(iframe);

        modal.style.display = "flex";

        // Smooth Opacity Transition
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
    }
});
