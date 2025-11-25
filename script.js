// JARVIS Interface Interactive Effects

// Add particle effects
function createParticles() {
    const container = document.querySelector('.central-container');

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00d4ff;
            border-radius: 50%;
            box-shadow: 0 0 5px #00ffff;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 3}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            opacity: ${0.3 + Math.random() * 0.7};
        `;
        container.appendChild(particle);
    }
}

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px);
        }
        50% {
            transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px);
        }
        75% {
            transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px);
        }
    }
`;
document.head.appendChild(style);

// Mouse interaction
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    const container = document.querySelector('.central-container');
    if (container) {
        container.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    }
});

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
    createParticles();

    // Add loading effect
    const title = document.querySelector('.title');
    if (title) {
        title.style.opacity = '0';
        setTimeout(() => {
            title.style.transition = 'opacity 2s ease-in';
            title.style.opacity = '1';
        }, 500);
    }

    console.log('JARVIS Interface initialized...');
});
