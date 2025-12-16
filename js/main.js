const openModal = document.querySelector('.open-login');
const modal = document.querySelector('.container_login')
const closemodal = document.querySelector('.cerrar-login')


openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal-show')
});

closemodal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal-show')
});