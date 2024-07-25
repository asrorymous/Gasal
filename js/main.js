document.addEventListener('DOMContentLoaded', function() {
    let coins = 0;

    function updateCoinDisplay() {
        document.getElementById('coin-count').textContent = coins;
    }

    document.getElementById('hero').addEventListener('click', function() {
        import('./hero.js').then(module => module.setupHero());
    });

    document.getElementById('forest').addEventListener('click', function() {
        import('./forest.js').then(module => module.setupForest());
    });

    document.getElementById('arena').addEventListener('click', function() {
        import('./arena.js').then(module => module.setupArena());
    });

    // Example function to add coins
    window.addCoins = function(amount) {
        coins += amount;
        updateCoinDisplay();
    }

    // Example function to spend coins
    window.spendCoins = function(amount) {
        if (coins >= amount) {
            coins -= amount;
            updateCoinDisplay();
            return true;
        } else {
            alert("Not enough coins!");
            return false;
        }
    }

    // Initial update of coin display
    updateCoinDisplay();
});
