const modalCancelBtn = document.querySelector('.modal-remove-btn');
const modalRemoveCross = document.querySelector('.modal-remove-cross');
const modalContainer = document.querySelector('.modal-container');
const modalSectionText = document.querySelector('.modalSectionText');
const showingModalBtn = document.querySelector('.modalShowingBtn');
modalContainer.style.display = 'none';
modalSectionText.style.display = 'block';
modalRemoveCross.addEventListener('click', () => {

    modalContainer.style.display = 'none';
    modalSectionText.style.display = 'block';
});
modalCancelBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
    modalSectionText.style.display = 'block';
})
showingModalBtn.addEventListener('click', () => {
    if (modalContainer.style.display === 'none') {
        modalContainer.style.display = 'block';

    } else {
        modalContainer.style.display = 'none';
    }
})
showingModalBtn.addEventListener('click', () => {
    if (modalSectionText.style.display === 'block') {
        modalSectionText.style.display = 'none';

    } else {
        modalSectionText.style.display = 'block';
    }
})