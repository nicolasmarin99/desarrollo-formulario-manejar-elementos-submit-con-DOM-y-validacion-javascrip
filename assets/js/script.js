let numero1 = 0;
let numero2 = 0;

let btnMostrarDatos = document.getElementById("btnMostrarDatos");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");

btnMostrarDatos.addEventListener("click", function (e) {
    e.preventDefault();

    numero1 = document.getElementById("numero1").value;

    error1.innerHTML = ""
    error2.innerHTML = ""

    if (numero1 === "") {
        error1.innerHTML = "debe agregar el valor del primer campo"
        error1.style.color = "red"
        return
    }

    numero2 = document.getElementById("numero2").value;

    if (numero2 === "") {
        error2.innerHTML = "debe agregar el valor del segundo campo"
        error2.style.color = "red"
        return
    }

    console.log("ok,paso nuestra validacion :)")
    console.log(`numeros: ${numero1} y ${numero2}`)


});