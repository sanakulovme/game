let mouse = document.querySelector('.mouse');


let demo = document.getElementById('demo')
document.addEventListener('keydown', event => {
    // console.log(event.key)
    if (event.key == 'ArrowRight') {
        mouse.className = 'mouse__right'
    }
    if (event.className == 'ArrowUp') {
        mouse.className = 'mouse__top'
    }

    // demo.innerHTML += event.key

})


// console.log(mouse)