export function setupHero() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Hero</h2>
        <p>Here you can manage your hero.</p>
        <button id="sharpen-weapon">Sharpen Weapon (10 coins)</button>
    `;

    document.getElementById('sharpen-weapon').addEventListener('click', function() {
        if (window.spendCoins(10)) {
            alert("Weapon sharpened!");
        }
    });
}
