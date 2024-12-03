document.addEventListener("DOMContentLoaded", () => {
    const cloud = document.querySelector(".cloud");
    const input = document.getElementById("dreamInput");
    const shareButton = document.getElementById("shareButton");
  
    cloud.addEventListener("click", () => {
      input.style.display = "block";
      shareButton.style.display = "block";
    });
  
    shareButton.addEventListener("click", () => {
      const dreamText = input.value.trim();
  
      if (dreamText) {
        const dreamDisplay = document.createElement("div");
        dreamDisplay.textContent = dreamText;
        dreamDisplay.style.position = "absolute";
        dreamDisplay.style.top = `${Math.random() * 70 + 10}%`;
        dreamDisplay.style.left = `${Math.random() * 70 + 10}%`;
        dreamDisplay.style.color = "white";
        dreamDisplay.style.fontSize = "1.5em";
        dreamDisplay.style.fontFamily = "Arial, sans-serif";
        dreamDisplay.style.textShadow = "0 0 10px rgba(255, 255, 255, 0.8)";
        dreamDisplay.style.opacity = "0.9";
  
        document.body.appendChild(dreamDisplay);
        input.value = ""; 
        input.style.display = "none"; 
        shareButton.style.display = "none"; 
      }
    });
  });