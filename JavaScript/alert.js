const successAlert = document.querySelector('.pop_alerts-success');
const warningAlert = document.querySelector('.pop_alerts-warning');
const showWarningButton = document.querySelector('.show_warning-button');
const showSuccessButton = document.querySelector('.show_success-button');

const errorAlert = document.querySelector('.pop_alerts-error');
const infoAlert = document.querySelector('.pop_alerts-info');
const showErrorButton = document.querySelector('.show_error-button');
const showInfoButton = document.querySelector('.show_info-button');


warningAlert.style.transform = 'translateY(-10rem)';
successAlert.style.transform = 'translateY(-15rem)'

errorAlert.style.transform = 'translateY(-15rem)';
infoAlert.style.transform = 'translateY(-10rem)'

showWarningButton.addEventListener('click', () => {
    if (warningAlert.style.transform === 'translateY(-10rem)') {
        warningAlert.style.transform = 'translateY(0rem)';
    } else {
        warningAlert.style.transform = 'translateY(-10rem)';
    }
});
showErrorButton.addEventListener('click', () => {
    if (errorAlert.style.transform === 'translateY(-15rem)') {
        errorAlert.style.transform = 'translateY(0rem)';
    } else {
        errorAlert.style.transform = 'translateY(-15rem)';
    }
});

warningAlert.addEventListener('click', () => {
    warningAlert.style.transform = 'translateY(-10rem)';
})
errorAlert.addEventListener('click', () => {
    errorAlert.style.transform = 'translateY(-15rem)';
})

showSuccessButton.addEventListener('click', () => {
    if (successAlert.style.transform === "translateY(-15rem)") {
        successAlert.style.transform = 'translateY(0rem)';

    } else {
        successAlert.style.transform = 'translateY(-15rem)';
    }
})
showInfoButton.addEventListener('click', () => {
    if (infoAlert.style.transform === "translateY(-10rem)") {
        infoAlert.style.transform = 'translateY(0rem)';

    } else {
        infoAlert.style.transform = 'translateY(-10rem)';
    }
})
successAlert.addEventListener('click', () => {
    successAlert.style.transform = 'translateY(-15rem)';
})
infoAlert.addEventListener('click', () => {
    infoAlert.style.transform = 'translateY(-10rem)';
})