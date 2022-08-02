
const control = form => {
    let invalids = form.querySelectorAll(':invalid'),
        button = form.querySelector('button[type="submit"]');

    console.log(invalids);

    if (invalids.length === 0){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', 'disabled');
    }
}

let forms = document.querySelectorAll('.form')
forms.forEach(form => {
    control(form);
    form.addEventListener('keyup', () => control(form));
    form.addEventListener('change', () => control(form));
});