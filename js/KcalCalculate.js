let edad = document.getElementById("edad").value

let altura = document.getElementById("altura").value

let peso = document.getElementById("peso").value

let pasos = document.getElementById("pasos").value

let actividad = document.getElementById("actividad").value

let entrenamiento = document.getElementById("entrenamiento").value

let objetivo = document.getElementById("objetivo").value

document.getElementById("actividad").style.display = "none"

document.getElementById("actividadLabel").style.display = "none"

let result = document.getElementById("resultKcal")



let calculation = function () {
    result.style.display = "block";
    let edad = document.getElementById("edad").value
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    let pasos = document.getElementById("pasos").value
    let actividad = document.getElementById("actividad").value
    let entrenamiento = document.getElementById("entrenamiento").value
    let objetivo = document.getElementById("objetivo").value

    let selectedRadio = document.querySelector('input[name="sex"]:checked');
    let sexo = selectedRadio ? selectedRadio.value : null;
    console.log('Sexo seleccionado:', sexo);

    let harrisBennedict = (getHarrisBennedictBySex(peso, altura, edad, sexo))
    let finalObjetive = getObjetive(objetivo);
    finalResult = parseInt(harrisBennedict * parseFloat(pasos) * parseFloat(actividad) * parseFloat(entrenamiento) * finalObjetive);
    result.innerHTML = 'Tus Kcal aproximadas son ' + finalResult + 'Kcal'

    console.log(finalResult)
}





document.getElementById("calculate").addEventListener("click", calculation)


document.getElementById("pasos").addEventListener("change", displayActivityFactor)


function displayActivityFactor() {
    if (document.getElementById("pasos").value == "1") {
        document.getElementById("actividad").style.display = "block"
        document.getElementById("actividadLabel").style.display = "block"

    } else {
        document.getElementById("actividad").style.display = "none"
        document.getElementById("actividadLabel").style.display = "none"
        document.getElementById("actividad").value = "1"
    }

}

function getHarrisBennedictBySex(peso, altura, edad, sexo) {
    if (sexo === "hombre") {
        return (66 + (13.7 * parseFloat(peso)) + (5 * parseInt(altura)) - (6.8 * parseInt(edad)) * 0.97)
    } else {
        return (655 + (9.6 * parseFloat(peso)) + (1.8 * parseInt(altura)) - (4.7 * parseInt(edad)) * 1.04)
    }
}

function getObjetive(objetivo) {
    return parseFloat(objetivo)
}




const form = document.getElementById('myForm');
const submitButton = document.getElementById('calculate');

// Añade un evento de input y change a todos los elementos del formulario
form.addEventListener('input', checkForm);
form.addEventListener('change', checkForm);

function checkForm() {

    const allFilled = Array.from(form.elements).every(input => {
        return input.type === 'radio' ? document.querySelector('input[name="' + input.name + '"]:checked') : input.value;
    });

    // Habilita o deshabilita el botón de envío en función de si todos los campos están llenos
    submitButton.disabled = !allFilled;
}
checkForm()