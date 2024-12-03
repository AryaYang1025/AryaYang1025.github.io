const recurringText = document.getElementById('recurring-text');
const contentBox = document.getElementById('content-box');
let scatteredTexts = [];
let isScattered = false;

recurringText.addEventListener('click', function () {
    if (isScattered) {
        // 收回文字
        scatteredTexts.forEach(text => {
            text.style.transform = `translate(${recurringText.offsetLeft - text.offsetLeft}px, ${recurringText.offsetTop - text.offsetTop}px) scale(0)`;
            text.style.opacity = '0';
            setTimeout(() => text.remove(), 500); // 动画结束后移除文字
        });
        scatteredTexts = [];
        isScattered = false;
    } else {
        // 分散文字
        const body = document.body;
        const textContent = recurringText.textContent;
        const count = 30; // 分散文字数量
        const padding = 50; // 页面边缘间距
        const contentRect = contentBox.getBoundingClientRect(); // 获取 content 的位置

        const usedPositions = [];

        for (let i = 0; i < count; i++) {
            const newText = document.createElement('div');
            newText.className = 'scattered-text';
            newText.textContent = textContent;

            let x, y, isOverlap, isInContent;

            do {
                // 生成随机坐标
                x = Math.random() * (window.innerWidth - padding * 2) + padding;
                y = Math.random() * (window.innerHeight - padding * 2) + padding;

                // 检查是否与 content 重叠
                isInContent =
                    x > contentRect.left &&
                    x < contentRect.right &&
                    y > contentRect.top &&
                    y < contentRect.bottom;

                // 检查是否与其他文字重叠
                isOverlap = usedPositions.some(pos => {
                    return Math.abs(pos.x - x) < 100 && Math.abs(pos.y - y) < 50;
                });
            } while (isOverlap || isInContent);

            // 保存有效位置
            usedPositions.push({ x, y });

            // 设置文字初始位置和动画目标
            newText.style.left = `${recurringText.offsetLeft}px`;
            newText.style.top = `${recurringText.offsetTop}px`;
            newText.style.transform = `translate(${x - recurringText.offsetLeft}px, ${y - recurringText.offsetTop}px) scale(1)`;
            newText.style.opacity = '1';

            // 添加到页面
            body.appendChild(newText);
            scatteredTexts.push(newText);
        }

        isScattered = true;
    }
});


