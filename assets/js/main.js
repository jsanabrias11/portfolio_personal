/*==========  SHOW AND HIDDEN MENU  ==========*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*==========  Show Menu  ==========*/
if(navToggle) {
    navToggle.addEventListener('click' , ()=>{
        navMenu.classList.add('show-menu');
    })
}
/*==========   Hidden menu  ==========*/

/*====   Close buttom  ====*/

if(navClose){ 
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*====   Close link  ====*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu') ;
    
    navMenu.classList.remove('show-menu')

}

navLink.forEach( l => l.addEventListener('click', linkAction));


/*==========  ACCORDION SKILLS  ==========*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass = this.parentNode.className;
    
    // Se puede de esta forma. o con el forEach
    // for(i = 0; i < skillsContent.length ; i++) {
    //     skillsContent[i].className = 'Hola'
    // }

    //Se tuvo que pasar a un Array normal para que se pueda leer con el forEach 
    Array.from(skillsContent).forEach(c => c.className = 'skills__content skills__close')

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach( le => le.addEventListener('click', toggleSkills))

/*==========  QUALIFICATION TABS  ==========*/
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        })

        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active');
    })
})

/*==========  SERVICES MODAL  ==========*/
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const closeBtns = document.querySelectorAll('.services__modal-close');


modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', ()=>{

        modalViews[i].classList.add('services__modal-active');

        // Close modal button
        closeBtns.forEach(closeBtn => {
            closeBtn.addEventListener('click', ()=>{
                modalViews[i].classList.remove('services__modal-active')

            })
        })
    })
})

/*==========  PORTFOLIO SWIPER  ==========*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW WHATSAPP BUTTON ====================*/ 
function showBtnWs(){
    const btnWhatsapp = document.getElementById('btnWhatsapp');
    // When the scroll is higher than 560 viewport height, add the show-btnWhatsapp class to the a tag with the btnWhatsapp ID
    if(this.scrollY >= 560) btnWhatsapp.classList.add('show-btnWhatsapp'); else btnWhatsapp.classList.remove('show-btnWhatsapp')
}
window.addEventListener('scroll', showBtnWs)










