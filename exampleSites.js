// for buttons

const btn = document.querySelectorAll(".example-btn")

btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelector('.highlight')?.classList.remove('highlight');

        btn.classList.add('highlight');
    });
});

//for image

const img = document.getElementById('example-img');

// const btn1 = document.getElementById('btn1').addEventListener('click', ()  => {
//     if (window.screen.width < 730) {
//         img.src = './assets/hcmobilehero.png'
//     } else {
//         img.src = './assets/hcdesktop.png'
//     }
// });

// const btn2 = document.getElementById('btn2').addEventListener('click', () => {
//     if (window.screen.width < 730) {
//         img.src = './assets/himobile.png'
//     } else {
//         img.src = './assets/hidesktop.png'
//     }
// });

// const btn3 = document.getElementById('btn3').addEventListener('click', () => {
//     if (window.screen.width < 730) {
//         img.src = './assets/cvmobile.png'
//     } else {
//         img.src = './assets/cvdesktop.png'
//     }
// });

const btn1 = document.getElementById('btn1').addEventListener('click', () => img.src = './assets/hcdesktop.png')

const btn2 = document.getElementById('btn2').addEventListener('click', () => img.src = './assets/hidesktop.png')

const btn3 = document.getElementById('btn3').addEventListener('click', () => img.src = './assets/cvdesktop.png')

const btn4 = document.getElementById('btn4').addEventListener('click', () => img.src = './assets/server.png')

