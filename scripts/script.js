/*================ Toggle icon navbar =====================*/
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

/*================ Scroll sections =====================*/
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });

    /*================ Sticky navbar =====================*/
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)

    /*=============== Remove navbar menu when click a link (scroll)===============*/
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};

/*================ Scroll reveal =====================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'})
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form, .about-text, .about-img', {origin: 'bottom'})
//ScrollReveal().reveal('.home.content h1, .about-img', {origin: 'left'})

/*================ typed js =====================*/
const typed = new Typed('.multiple-text', {
    strings: ['a Software Engineer', 'a Full Stack Developer', 'an UX/UI Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
})

/*================ validate form =====================*/
//get data
const nameInput = document.querySelector("#name");
const emailAddress = document.querySelector("#emailAddress");
const mobile = document.querySelector("#mobile");
const emailSubject = document.querySelector("#emailSubject");
const message = document.querySelector("#message");

// validate data
function validateForm() {

    let isValid = true;
    clearMessages();

    if (nameInput.value.length < 1) {
        nameInput.placeholder = "Name cannot be blank";
        nameInput.classList.add("error");
        isValid = false;
    }

    if (!emailIsValid(emailAddress.value)) {
        emailAddress.value = "";
        emailAddress.placeholder = "Please enter a valid email";
        emailAddress.classList.add("error");
        isValid = false;
    }

    if (mobile.value.length < 1) {
        mobile.placeholder = "Mobile number cannot be blank";
        mobile.classList.add("error");
        isValid = false;
    }

    if (emailSubject.value.length < 1) {
        emailSubject.placeholder = "Please enter a subject";
        emailSubject.classList.add("error");
        isValid = false;
    }

    if (message.value.length < 1) {
        message.placeholder = "Please enter a message";
        message.classList.add("error");
        isValid = false;
    }

    return isValid;
}

// clear error / success messages
function clearMessages() {
    nameInput.classList.remove("error");
    emailAddress.classList.remove("error");
    mobile.classList.remove("error");
    emailSubject.classList.remove("error");
    message.classList.remove("error");
}

// validate email
function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

/*================ send messages =====================*/
function sendEmail() {
    if (validateForm()) {
        const form = document.querySelector("#my-form");
        form.method = "POST";
        form.action = "https://formspree.io/f/mjvqjznl";
        form.submit();
    }
}
