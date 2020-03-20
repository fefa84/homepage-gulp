
console.log('Siema');
const name = 'Ewa';
const age = 35;


console.log(`Nazywam się ${name} i mam ${age}lat. Cieszę się, że zaglądasz na moją stronę.`);

const knowMore = document.querySelector('.knowMore__extra--js');
knowMore.innerHTML = `Nazywam się Ewa Mitra.Teraz muszę to napisać, a potem skasuję`;

const welcome = (name, age)=> {
    console.log(`Witaj, ${name}! Masz ${age} lat`);
}
welcome (name,age);

const navigationSwitcher= document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e)=> {
    const navigationList=document.querySelector('.navigation__list--js')
    navigationList.classList.toggle('navigation__list--visible')  
});



