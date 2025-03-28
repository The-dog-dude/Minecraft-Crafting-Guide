function calculateXP(level) {
    if (level <= 16) {
        return level * level + 6 * level;
    } else if (level <= 31) {
        return 2.5 * level * level - 40.5 * level + 360;
    } else {
        return 4.5 * level * level - 162.5 * level + 2220;
    }
}

function displayXPResult(level, x, y) {
    const xp = calculateXP(level);
    const resultElement = document.getElementById('xp-result');
    resultElement.textContent = `XP Required: ${xp}`;
    triggerXPBurst(x, y);
}

function triggerXPBurst(x, y) {
    for (let i = 0; i < 5; i++) { // Generate 5 orbs
        let orb = document.createElement('div');
        orb.classList.add('xp-orb');
        orb.style.setProperty('--x', `${Math.random() * 100 - 50}px`);
        orb.style.setProperty('--y', `${Math.random() * -100}px`);
        orb.style.left = `${x}px`;
        orb.style.top = `${y}px`;
        document.body.appendChild(orb);
        setTimeout(() => orb.remove(), 800); // Remove after animation
    }
}

document.getElementById('xp-calculate-btn').addEventListener('click', function() {
    const level = parseInt(document.getElementById('xp-input').value);
    if (!isNaN(level)) {
        const rect = this.getBoundingClientRect();
        displayXPResult(level, rect.left + rect.width / 2, rect.top);
    }
});
