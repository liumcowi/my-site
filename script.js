document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const imageFolder = './images/'; // Path to your images folder
    const videoFolder = './videos/'; // Path to your videos folder
    const totalImages = 29; // Manually set the total number of images
    const imageExtension = 'webp'; // Change this if using a different image format
    const totalVideos = 1; // Set the total number of WebM videos


    // Populate videos first
    for (let i = 1; i <= totalVideos; i++) {
        const video = document.createElement('video');
        video.src = `${videoFolder}${i}.webm`;
        video.alt = `Gallery Video ${i}`;
        video.classList.add('gallery-video');
        video.controls = true; // Optional: adds video controls
        video.preload = 'metadata'; // Preload video metadata
        gallery.appendChild(video);
    }


    // Then populate images
    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        img.src = `${imageFolder}${i}.${imageExtension}`;
        img.alt = `Gallery Image ${i}`;
        img.classList.add('gallery-image');
        gallery.appendChild(img);
    }
});
