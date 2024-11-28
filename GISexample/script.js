// Function to enlarge image
function enlargeImage(imgElement) {
    // Get the modal and image elements
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    
    // Set the src of the modal image to the clicked image's src
    modalImg.src = imgElement.src;
    
    // Display the modal
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}