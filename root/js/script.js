const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', validate);
email.addEventListener('invalid', validate);

function emailIsValid () {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validation = re.test(email.value);

    return validation;
}

function validate() {
    const icon = document.getElementById('js--error-icon');
    const invalid = document.getElementById('js--invalid');
    const empty = document.getElementById('js--empty');

    event.preventDefault();

    if(email.value === '') {
        email.classList.add('invalid');
        invalid.classList.add('hidden')
        empty.classList.remove('hidden');
        icon.classList.remove('hidden');
        return false;
    }
    else if(emailIsValid() === false) {
        email.classList.add('invalid');
        empty.classList.add('hidden');
        invalid.classList.remove('hidden');
        icon.classList.remove('hidden');
        return false;
    }
    else {
        email.classList.remove('invalid');
        invalid.classList.add('hidden');
        empty.classList.add('hidden');
        icon.classList.add('hidden');
        return true;
    }


}