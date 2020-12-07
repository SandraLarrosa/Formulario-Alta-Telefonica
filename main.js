
const buttonAssessment = document.querySelector('.buttonAssessment');
const buttonShowBank = document.querySelector('.buttonShowBank')
const buttonShowDay = document.querySelector('.buttonShowDay')


const showAssessment = () => {
    const rangeAssessment = document.querySelector('#assessment').value;
    alert(`Has valorado con ${rangeAssessment} puntos`)
}

const showBank = () => {
    const country = document.querySelector('#country').value;
    const iban = document.querySelector('#iban').value;
    const bank = document.querySelector('#bank').value;
    const branch = document.querySelector('#branch').value;
    const dc = document.querySelector('#dc').value;
    const account = document.querySelector('#account').value;

    if (iban.length < 2 || bank.length < 4 || branch.length < 4 || dc.length < 2 || account.length < 10) {
        alert('No has introducido correctamente tu cuenta bancaria')
    } else {
        alert(`Le informamos que su cuenta bancaria es: ${country}${iban}-${bank}-${branch}-${dc}-${account}`)
    }
}

const showDay = () => {
    const dateForm = new Date(document.querySelector('#date').value);
    const day = dateForm.getDay();
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
    ]
    const nameDay = days[day]
    alert(`La fecha seleccionada en el elemento de fecha es ${nameDay}`);
}


buttonAssessment.addEventListener('click', showAssessment)
buttonShowBank.addEventListener('click', showBank)
buttonShowDay.addEventListener('click', showDay)

