const letter = document.querySelector('.letter');
const modal = document.querySelector('.modal');
const noBtn = document.querySelector('.no-btn');
const yesBtn = document.querySelector('.yes-btn');
const celebrationText = document.querySelector('.celebration-text');

letter.addEventListener('click', () => {
    modal.style.display = 'block';
});

noBtn.addEventListener('click', () => {
    const maxX = 200;
    const maxY = 200;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.transition = '0.2s all';
});

function createFirework(x, y) {
    const colors = ['#FF4B6E', '#FFD700', '#FF69B4', '#FF1493', '#FFA500'];
    for (let i = 0; i < 40; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(firework);

        const angle = (Math.PI * 2 * i) / 40;
        const velocity = 15;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        let posX = x;
        let posY = y;
        let opacity = 1;

        const animate = () => {
            posX += vx;
            posY += vy;
            opacity -= 0.02;
            firework.style.left = `${posX}px`;
            firework.style.top = `${posY}px`;
            firework.style.opacity = opacity;
        
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                firework.remove();
            }
        };

        requestAnimationFrame(animate);
    }
}

function celebration() {
    modal.style.display = 'none';
    letter.style.display = 'none';
    document.querySelector('.opening-gif').style.display = 'none';
    document.querySelector('.celebration-gif').style.display = 'block';
    document.querySelector('.celebration-text').style.display = 'block';

    const interval = setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createFirework(x, y);
    }, 200);
}

yesBtn.addEventListener('click', celebration);