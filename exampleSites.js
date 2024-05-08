
const btn = document.querySelectorAll(".example-btn");
const img = document.getElementById('example-img');


btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelector('.highlight')?.classList.remove('highlight');

        btn.classList.add('highlight');
    });
});


const btn1 = document.getElementById('btn1').addEventListener('click', () => {
    const hero = document.querySelector('.hero-section');
    document.querySelector('.active')?.classList.remove('active')

    hero.classList.add('active')
})

const btn2 = document.getElementById('btn2').addEventListener('click', () => {
    const mobile = document.querySelector('.mobile-designs');
    document.querySelector('.active')?.classList.remove('active')

    mobile.classList.add('active')
})

const btn3 = document.getElementById('btn3').addEventListener('click', () => {
    const forms = document.querySelector('.form-designs');
    document.querySelector('.active')?.classList.remove('active')

    forms.classList.add('active')
})

