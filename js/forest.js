export function setupForest() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Forest</h2>
        <p>Explore the forest and find items.</p>
        <button id="find-coins">Find Coins</button>
    `;

    document.getElementById('find-coins').addEventListener('click', function() {
        window.addCoins(5);
        alert("You found 5 coins!");
    });
}
