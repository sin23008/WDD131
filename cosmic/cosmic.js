function createStars() {
    const scene = document.getElementById('cosmicScene');
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 1}s`;
        scene.appendChild(star);
    }
}

function createPlanet() {
    const scene = document.getElementById('cosmicScene');
    const planet = document.createElement('div');
    planet.className = 'planet';
    planet.style.width = '300px';
    planet.style.height = '300px';
    planet.style.left = 'calc(50% - 150px)';
    planet.style.top = 'calc(50% - 150px)';
    scene.appendChild(planet);
}

function createUFO() {
    const scene = document.getElementById('cosmicScene');
    const ufoOrbit = document.createElement('div');
    ufoOrbit.className = 'ufo-orbit';
    ufoOrbit.style.left = 'calc(50% - 0.5px)';
    ufoOrbit.style.top = 'calc(50% - 0.5px)';
    
    const ufo = document.createElement('div');
    ufo.className = 'ufo';
    ufo.style.left = '-50px';
    ufo.style.top = '-25px';
    ufo.addEventListener('click', shootLaser);
    
    ufoOrbit.appendChild(ufo);
    scene.appendChild(ufoOrbit);
}

function shootLaser(event) {
    const scene = document.getElementById('cosmicScene');
    const ufo = event.target;
    const ufoRect = ufo.getBoundingClientRect();
    const sceneRect = scene.getBoundingClientRect();

    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const laser = document.createElement('div');
            laser.className = 'laser';
            
            const laserStartX = ufoRect.left + ufoRect.width / 2 - sceneRect.left;
            const laserStartY = ufoRect.top + ufoRect.height / 2 - sceneRect.top;
            
            laser.style.left = `${laserStartX}px`;
            laser.style.top = `${laserStartY}px`;
            
            const angle = -30 + i * 30; // Spread lasers at -30°, 0°, and 30°
            laser.style.transform = `rotate(${angle}deg)`;

            scene.appendChild(laser);

            // Play laser sound
            const laserSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU' + 'A'.repeat(1024));
            laserSound.play();

            setTimeout(() => {
                scene.removeChild(laser);
            }, 500);
        }, i * 100); // Delay each laser by 100ms
    }
}

window.addEventListener('load', () => {
    createStars();
    createPlanet();
    createUFO();
});