const recurringText = document.getElementById('recurring-text');
const contentBox = document.getElementById('content-box');
let scatteredTexts = [];
let isScattered = false;

recurringText.addEventListener('click', function () {
    if (isScattered) {
       
        scatteredTexts.forEach(text => {
            text.style.transform = `translate(${recurringText.offsetLeft - text.offsetLeft}px, ${recurringText.offsetTop - text.offsetTop}px) scale(0)`;
            text.style.opacity = '0';
            setTimeout(() => text.remove(), 500); 
        });
        scatteredTexts = [];
        isScattered = false;
    } else {
        
        const body = document.body;
        const textContent = recurringText.textContent;
        const count = 30; 
        const padding = 50; 
        const contentRect = contentBox.getBoundingClientRect(); 

        const usedPositions = [];

        for (let i = 0; i < count; i++) {
            const newText = document.createElement('div');
            newText.className = 'scattered-text';
            newText.textContent = textContent;

            let x, y, isOverlap, isInContent;

            do {
                
                x = Math.random() * (window.innerWidth - padding * 2) + padding;
                y = Math.random() * (window.innerHeight - padding * 2) + padding;

                
                isInContent =
                    x > contentRect.left &&
                    x < contentRect.right &&
                    y > contentRect.top &&
                    y < contentRect.bottom;

                
                isOverlap = usedPositions.some(pos => {
                    return Math.abs(pos.x - x) < 100 && Math.abs(pos.y - y) < 50;
                });
            } while (isOverlap || isInContent);

            
            usedPositions.push({ x, y });

            
            newText.style.left = `${recurringText.offsetLeft}px`;
            newText.style.top = `${recurringText.offsetTop}px`;
            newText.style.transform = `translate(${x - recurringText.offsetLeft}px, ${y - recurringText.offsetTop}px) scale(1)`;
            newText.style.opacity = '1';

            
            body.appendChild(newText);
            scatteredTexts.push(newText);
        }

        isScattered = true;
    }
});


