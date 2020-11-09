const button1 = document.querySelector('.click')
const secondPage = document.querySelector('.cont2')
const firstPage = document.querySelector('.blueBGD')
const submitButt = document.querySelector('.blockB');
const thirdPage = document.querySelector ('.prompt');

const hey = document.querySelector ('.hey')
const showName = document.querySelector ('.showName')
const days = document.querySelector ('.days')

button1.addEventListener('click', function(){
    secondPage.classList.remove('hidden');
    firstPage.classList.add('hidden');
})

submitButt.addEventListener ('click', function(e){
    e.preventDefault();

var yourName = document.getElementById("name").value;
var yourAge = document.getElementById("age").value;
var ageInDays = yourAge * 365;

if (yourName == "" || yourAge == "") {
    alert("input missing field");
  
}
else{
    hey.textContent = "HEY THERE !!!" ;
    showName.textContent = "YOUR NAME IS: " + yourName;
    days.textContent = "YOU HAVE LIVED " + ageInDays + " DAYS ON EARTH"
}

secondPage.classList.add('hidden');
thirdPage.classList.remove('hidden');

})