var viccek;

fetch('/jokes.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    viccek = d;

    let vicc = document.getElementById("vicc");

    for (var i = 0; i < viccek.lenght; i++) {
        console.log(viccek[i].question)
        let elem = document.createElement("div")
        elem.innerHTML = adat[i].question
        vicc.appendChild(elem)
    }
}

window.onload(letöltésBefejeződött);