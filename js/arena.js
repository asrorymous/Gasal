export function setupArena() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Arena</h2>
        <p>Welcome to the arena. Fight and earn rewards!</p>
        <button id="fight">Fight (5 coins)</button>
    `;

    document.getElementById('fight').addEventListener('click', function() {
        if (window.spendCoins(5)) {
            alert("You fought bravely and earned rewards!");
        }
    });
}
