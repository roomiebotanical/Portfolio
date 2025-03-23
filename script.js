let images = document.querySelectorAll("img");

//wrapper
let wrapper = document.getElementById('wrapper');

//imgWrapper
let imgWrapper = document.getElementById('fullImg');

//close
let close = document.querySelector('span');

// Add event listener to each image
images.forEach((img) => {
    img.addEventListener('click', () => {
        openModal(img.src); // Pass the image source to the openModal function
    });
});

// Function to open the modal
function openModal(pic) {
    wrapper.style.display = "flex";
    imgWrapper.src = pic;
    pic.classList.add('no-hover'); // Add class to prevent hover effect
}

// Add event listener to close the modal
close.addEventListener('click', () => {
    wrapper.style.display = "none";
    imgWrapper.classList.remove('no-hover'); // Remove class when modal is closed
});