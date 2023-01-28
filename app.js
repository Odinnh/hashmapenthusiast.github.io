let debug = false
import d from './b.js'
let clockwise
// const CLU1B = 'https://cdn.discordapp.com/attachments/1026379861549400155/1026381086147747870/Clue1.png';
// const CLU2B = 'https://cdn.discordapp.com/attachments/1026379861549400155/1026381087041126480/Clue2.png';
// const CLU3B = 'https://cdn.discordapp.com/attachments/1026379861549400155/1026381087833849866/Clue3.png';
// const CLU4B = 'https://cdn.discordapp.com/attachments/1026379861549400155/1026381085745102898/Clue4.png';
// const CLU1C = 'https://cdn.discordapp.com/attachments/1026379861549400155/1026381086630105100/Clue1coloured.png';
// const CLU2C = 'https://cdn.discordapp.com/attachments/1026379861549400155/1026381087456378940/Clue2coloured.png';
// const CLU3C = 'https://cdn.discordapp.com/attachments/1026379861549400155/1026381089834549329/Clue3coloured.png';
const CLU1D = 'https://cdn.discordapp.com/attachments/1026379861549400155/1026733442441949205/Clue1nightmode.png'
const CLU2D = 'https://cdn.discordapp.com/attachments/1026379861549400155/1026733442777485332/Clue2nightmode.png'
const CLU3D = 'https://cdn.discordapp.com/attachments/1026379861549400155/1026733443243049041/Clue3nightmode.png'
const CLU4D = 'https://cdn.discordapp.com/attachments/1026379861549400155/1026733441942818816/Clue4nightmode.png'


const image1 = document.querySelector("#img1");
const image2 = document.querySelector("#img2");
const image3 = document.querySelector("#img3");
const image4 = document.querySelector("#img4");

image1.src = CLU1D;
image2.src = CLU2D;
image3.src = CLU3D;
image4.src = CLU4D;

const forwards = document.querySelector("#playforwards");
const backwards = document.querySelector("#playbackwards");
const delay = document.querySelector("#delay");
const pause = document.querySelector("#pause");
const coloured = document.querySelector("#coloured");
const darkmode = document.querySelector('#darkmode');
const i1r = document.querySelector('#i1r');
const i1n = document.querySelector('#i1n');
const i2r = document.querySelector('#i2r');
const i2n = document.querySelector('#i2n');
const i3r = document.querySelector('#i3r');
const i3n = document.querySelector('#i3n');
const i4r = document.querySelector('#i4r');
const i4n = document.querySelector('#i4n');
const i110 = document.querySelector('#i110');
const i210 = document.querySelector('#i210');
const i310 = document.querySelector('#i310');
const i410 = document.querySelector('#i410');
const root = document.querySelector(':root');

// darkmode.addEventListener('change', () => {
   
// })

const rotatePicture = (e) => {
    //what triggered
    if (debug) {
        console.log(e.target)
        console.log(e.target.name)
    }
    const img = document.querySelector('#img' + e.target.id[1])
    const range = document.querySelector('#i' + e.target.id[1] + 'r')
    const number = document.querySelector('#i' + e.target.id[1] + 'n')

    //get the position
    const css_variable = '--' + e.target.id.slice(0, 2);

    //move it
    const new_angle = e.target.value + 'deg';

    img.style.setProperty(css_variable, new_angle)
    range.value = e.target.value
    number.value = e.target.value

    d()
}

i1r.addEventListener('change', (e) => rotatePicture(e))
i1n.addEventListener('change', (e) => rotatePicture(e))
i2r.addEventListener('change', (e) => rotatePicture(e))
i2n.addEventListener('change', (e) => rotatePicture(e))
i3r.addEventListener('change', (e) => rotatePicture(e))
i3n.addEventListener('change', (e) => rotatePicture(e))
i4r.addEventListener('change', (e) => rotatePicture(e))
i4n.addEventListener('change', (e) => rotatePicture(e))

const play = () => {
    let angle1 = getComputedStyle(image1).getPropertyValue("--i1");
    let angle2 = getComputedStyle(image2).getPropertyValue("--i2");
    let angle3 = getComputedStyle(image3).getPropertyValue("--i3");
    const increment = Number(document.querySelector("#increment").value) || 1;
    let next1 = Number(angle1.match(/[0-9]*/)[0]) + increment;
    let next2 = Number(angle2.match(/[0-9]*/)[0]);
    let next3 = Number(angle3.match(/[0-9]*/)[0]);
    if (next1 >= 360) {
        next1 %= 360
        next2 += increment
        if (next2 >= 360) {
            next2 %= 360
            next3 += increment
            if (next3 >= 360) {
                next3 %= 360
            }
        }
    }
    i1r.value = next1
    i1n.value = next1
    i2r.value = next2
    i2n.value = next2
    i3r.value = next3
    i3n.value = next3
    next1 = "" + next1 + "deg"
    next2 = "" + next2 + "deg"
    next3 = "" + next3 + "deg"
    if (debug) {
        console.log("next1: ", next1)
        console.log("next2: ", next2)
        console.log("next3: ", next3)
    }
    d()
    image1.style.setProperty("--i1", next1)
    image2.style.setProperty("--i2", next2)
    image3.style.setProperty("--i3", next3)
}


let frame = Number(delay.value) || 200

let on = false

const start = (inc) => {
    if (!on) {
        frame = Number(delay.value) || 200
        clockwise = setInterval(play, frame)
        on = true;
    } else {
        stop()
        frame = Number(delay.value) || 200;
        clockwise = setInterval(play, frame)
        on = true;
    }
}


const stop = () => {
    clearInterval(clockwise)
    on = false;
}
const onOff = (e) => {
    const image = document.querySelector('#img' + e.target.id[1])

    if (e.target.checked) {
        image.style.setProperty('visibility', 'visible')

    } else {
        image.style.setProperty('visibility', 'hidden')
    }


}
i110.addEventListener('change', (e) => onOff(e))
i210.addEventListener('change', (e) => onOff(e))
i310.addEventListener('change', (e) => onOff(e))
i410.addEventListener('change', (e) => onOff(e))

forwards.addEventListener("click", start)
pause.addEventListener("click", stop)

//depricated in favor of hsb controlls
coloured.addEventListener("change", () => {
    if (debug) console.log(coloured.checked)
    if (coloured.checked) {
        root.style.setProperty('--brightness', '1');
    } else {
        root.style.setProperty('--brightness', '0');

    }
})
