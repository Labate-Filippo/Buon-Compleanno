document.addEventListener('DOMContentLoaded', () => {
    // Add sparkle effect to auguri
    const auguri = document.querySelector('.auguri');
    setInterval(() => {
        const sparkle = document.createElement('span');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        auguri.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }, 200);

    // Add hover effect to container
    const container = document.querySelector('.container');
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = x / rect.width;
        const yPercent = y / rect.height;
        
        const xRotation = (xPercent - 0.5) * 5;
        const yRotation = (yPercent - 0.5) * 5;
        
        container.style.transform = `perspective(1000px) rotateX(${-yRotation}deg) rotateY(${xRotation}deg) scale(1.02)`;
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});
