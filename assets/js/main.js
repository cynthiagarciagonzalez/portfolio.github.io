/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*==================== EMAIL ====================*/
const form = document.querySelector('.contact__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Guardar los datos en LocalStorage
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);

  fetch('https://formspree.io/f/xnnadldw', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(formData).toString()
  })
  .then((response) => {
    if (response.ok) {
      alert(`Gracias ${name}, tu mensaje ha sido enviado.`);
      form.reset();
    } else {
      throw new Error('Error al enviar el formulario.');
    }
  })
    .catch((error) => {
    console.error(error);
    alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
   });
});

// Recuperar los datos de LocalStorage cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
  
    if (name && email) {
      document.querySelector('input[name="name"]').value = name;
      document.querySelector('input[name="email"]').value = email;
    }
  });


