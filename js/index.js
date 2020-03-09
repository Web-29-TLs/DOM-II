// Your code goes here

// scales up "Fun Bus" in nav 
const scalingUp = document.querySelector('.logo-heading');
scalingUp.addEventListener('mouseenter', e => {
    console.log('mouser');
    scalingUp.style.transform = 'scale(10)';
    scalingUp.style.color = 'blue';
})
// scales down "Fun Bus" in nav
const scalingDown = document.querySelector('.logo-heading');
scalingDown.addEventListener('mouseleave', e => {
    scalingDown.style.color = 'black';
    scalingDown.style.transform = 'scale(1)';
})

// Keydown & Keyup - changes body to hotpink when key is pressed down, and back to black when keyup
const backgroundChange = document.querySelector('body');
backgroundChange.addEventListener('keydown', (e) => {
    backgroundChange.style.color = 'hotpink';
});
backgroundChange.addEventListener('keyup', (e) => {
    backgroundChange.style.color = 'black';
});

// Copy Notifier - will notify you with a pop up if you try to copy any of the paragraphs 
const copy = document.querySelectorAll('p');
copy.forEach(item => {
    item.addEventListener('copy', (e) => {
    window.alert("Stop! In the naaaaaame of looooove!");
  });
});
copy.forEach(item => {
    item.addEventListener('cut', (e) => {
    window.alert("Hey! Don't cut me fool!");
  });
});

// Wheel - makes top img bigger and smaller with scroll bar on mouse
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  const el = document.querySelector('img');
  el.onwheel = zoom;

// when the left mouse button is pressed down, the image changes to a cute spider
const changePic = document.querySelector('.content-section .img-content img');
    console.log(changePic);
    changePic.addEventListener('mousedown', (e) => {
        console.log('mousedown');
        changePic.setAttribute('src', '../img/creepy.jpg');
        e.stopPropagation();
    changePic.addEventListener('mouseup', (e) => {
        console.log('mouseup');
        changePic.setAttribute('src', '../img/horse.jpg' )
        e.stopPropagation();
    })
  })



// when mouse passes over the nav bar, it changes the text to be hot pink
const last = document.querySelector('.nav');
last.addEventListener('mouseover', (e) => {
    event.target.style.color = 'hotpink';
})

// this rotates the funBus image (4)
const rotatingBus = document.querySelector('.intro img');
    rotatingBus.addEventListener('dblclick', () => {
        rotatingBus.style.transform = 'rotate(980deg)';
        rotatingBus.style.transition = 'all 1s';
    })

// stops nav from refreshing the page
const aLinks = document.querySelectorAll('.nav a');
aLinks.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log(`${e.target.innerText} was clicked!`)
    }) 
})

// On first button, counts consecutive clicks, and upon pause, resets to 1
const click = document.querySelector('.btn');
click.addEventListener('click', (e) => {
    click.innerHTML = `Click count: ${event.detail}`;
});

