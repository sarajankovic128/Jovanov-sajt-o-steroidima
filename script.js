function prikaziInfo() {
    const info = `
        <h3>Šta su steroidi?</h3>
        <p>Steroidi su hemijske supstance koje imitiraju testosteron. Često se koriste u sportu, ali mogu biti rizični za zdravlje.</p>
        <ul>
            <li>Brži rast mišića</li>
            <li>Povećana snaga</li>
            <li>Ali i mogući ozbiljni neželjeni efekti</li>
        </ul>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bodybuilder.jpg/640px-Bodybuilder.jpg"alt="Bodybuilder slika">
    `;
    document.getElementById("infoBox").innerHTML = info;
}

function glasaj() {
    const izbor = document.getElementById("glasanjeOpcije").value;
    document.getElementById("glasanjeRezultat").innerText = `Hvala! Glasali ste za: ${izbor}.`;
}

function posaljiPoruku(event) {
    event.preventDefault();
    const ime = document.getElementById("ime").value;
    const email = document.getElementById("email").value;
    const poruka = document.getElementById("poruka").value;

    document.getElementById("porukaPotvrda").innerText = `Hvala, ${ime}. Vaša poruka je primljena.`;
}