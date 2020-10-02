const button1 = document.querySelector('.click')
const secondPage = document.querySelector('.cont2')
const firstPage = document.querySelector('.blueBGD')

button1.addEventListener('click', function(){
    secondPage.classList.remove('hidden');
})