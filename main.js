const buttonForm = document.querySelector('.buttonForm');
const buttonAssessment = document.querySelector('.buttonAssessment');
const buttonShowBank = document.querySelector('.buttonShowBank')


const actionButton = (ev) => {
    ev.preventDefault();
}

const showAssessment = () => {
    const rangeAssessment = document.querySelector('#assessment').value;
    alert(`Has valorado con ${rangeAssessment} puntos`)
    console.log('hola mundo', rangeAssessment);
}

const showBank = () => {
    const country = document.querySelector('#country').value;
    const iban = document.querySelector('#iban').value;
    const bank = document.querySelector('#bank').value;
    const branch = document.querySelector('#branch').value;
    const dc = document.querySelector('#dc').value;
    const account = document.querySelector('#account').value;
    alert(`Le informamos que su cuenta bancaria es: ${country}${iban}-${bank}-${branch}-${dc}-${account}`)
}


buttonForm.addEventListener('click', actionButton)
buttonAssessment.addEventListener('click', showAssessment)
buttonShowBank.addEventListener('click', showBank)

