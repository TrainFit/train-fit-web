


let result = document.getElementById("resultRM")
let calculation = function () {
    result.style.display = "block";



    let pesokg = document.getElementById("pesokg").value;

    let reps = document.getElementById("reps").value;

    let rmentero = pesokg / (1.0278 -(0.0278 * reps));

    resultRM.innerHTML = " Tu RM aproximado es: " + parseInt(rmentero) +"KG";
    

}

document.getElementById("calculate").addEventListener("click", calculation)

const form = document.getElementById('myForm');
const submitButton = document.getElementById('calculate');
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