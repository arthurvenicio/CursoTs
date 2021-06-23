const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const submitEventFn = (event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    hideErrorMessages(target);
    checkForEmptyFileds(username, email, password, password2);
    checkEqualPasswords(password, password2);
    if (shouldSendForm(target)) console.log('forms enviado');
};

form.addEventListener('submit', submitEventFn);

export function checkForEmptyFileds(...inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
        if (!input.value)
            showErrorMessages(input, 'Campo não pode ficar vazio');
    });
}

function checkEqualPasswords(
    password: HTMLInputElement,
    password2: HTMLInputElement,
) {
    if (password.value !== password2.value) {
        showErrorMessages(password2, 'Senhas não batem');
    }
}

function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) =>
        item.classList.remove(SHOW_ERROR_MESSAGES),
    );
}

function showErrorMessages(input: HTMLInputElement, msg: string): void {
    const formFields = input.parentElement as HTMLDivElement;
    const errorMessage = formFields.querySelector(
        '.error-message',
    ) as HTMLSpanElement;
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
    let send = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(
        () => (send = false),
    );
    return send;
}
