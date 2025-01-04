// Grab main container and buttons
const mainContainer = document.getElementById("main-container");
const startButton = document.getElementById("start-button");
const backButton = document.getElementById("back-button");

// Handle Start button click: Move to Page 2
startButton.addEventListener("click", () => {
  mainContainer.style.transform = "translateX(-100%)"; // Slide to second page
});

// Handle Back button click: Move to Page 1
backButton.addEventListener("click", () => {
  mainContainer.style.transform = "translateX(0)"; // Slide back to first page
});

// Draw graphics using D3.js
function drawGraphics() {
  // Graphic 1 (Page 1)
  const svg1 = d3.select("#graphic1");
  svg1.append("circle")
    .attr("cx", 100)
    .attr("cy", 100)
    .attr("r", 50)
    .attr("fill", "#0073e6");

  // Graphic 2 (Page 2)
  const svg2 = d3.select("#graphic2");
  svg2.append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 100)
    .attr("height", 100)
    .attr("fill", "#ff5733");
}

// Initialize graphics
drawGraphics();