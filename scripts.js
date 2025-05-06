let h1Texto = document.getElementById("h1Texto")
let inputum = document.getElementById("inputum")
let inputdois = document.getElementById("inputdois")

function soma() {
    let num = Number(inputum.value);
    let numdois = Number(inputdois.value);
    let resultado = num + numdois;
    h1Texto.textContent = resultado;
}