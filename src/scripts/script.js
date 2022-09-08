let burgerBtn = document.getElementById('burger-btn')
let click = false

// promo section
let promo = document.getElementById('promo-wrapper')

// burger menu - div
let divNav = document.createElement('div')

// links (About, Features, Pricing, Testimonials, Help, Signip, Signup)     
let about = document.createElement('a')
about.innerText = 'About'
about.href = '#'
about.classList.add('menu-links')

let features = document.createElement('a')
features.innerText = 'Features'
features.href = '#'
features.classList.add('menu-links')

let pricing = document.createElement('a')
pricing.innerText = 'Pricing'
pricing.href = '#'
pricing.classList.add('menu-links')

let testimonials = document.createElement('a')
testimonials.innerText = 'Testimonials'
testimonials.href = '#'
testimonials.classList.add('menu-links')

let help = document.createElement('a')
help.innerText = 'Help'
help.href = '#'
help.classList.add('menu-links')

let signin = document.createElement('a')
signin.innerText = 'Sign In'
signin.href = '#'
signin.classList.add('menu-links')

let signup = document.createElement('a')
signup.innerText = 'Sign In'
signup.href = '#'
signup.classList.add('menu-links')

// menu div class
divNav.classList.add('openBurgerMenu')

burgerBtn.addEventListener('click', () => {
    if (click) {
        click = false
        console.log('close menu')

        document.body.removeChild(divNav)
    } else {
        click = true
        console.log('open menu')

        let start = Date.now(); // time of start

        let timer = setInterval(function () {
            // how much time has passed since the animation started
            let timePassed = Date.now() - start;

            if (timePassed >= 300) {
                clearInterval(timer); // finish animation after 0.3s
                return;
            }

            // draw animation
            draw(timePassed);

        });

        function draw(timePassed) {
            divNav.style.height = timePassed / 0.85 + 'px'
            divNav.style.backgroundColor = 'rgb(209, 209, 209)'
        }

        divNav.append(about, features, pricing, testimonials, help, signin, signup)
        document.body.insertBefore(divNav, promo)
    }
})