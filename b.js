const playSound = () => {
    var originalAudio = document.createElement('audio')
    var audioButton = document.createElement('button')
    audioButton.innerHTML = "remove audio"
    audioButton.addEventListener('click', (e) => {
        document.querySelector('audio').remove()
        audioButton.remove()
    })
    originalAudio.style.display = "none"
    // a is an mp3 of the song "Dead Or Alive - You Spin Me Round" 
    // cause obviously this is the unpolled QoL we need
    originalAudio.src = './a#t=61.4'
    originalAudio.volume = 0.2
    originalAudio.autoplay = 1
    originalAudio.onended = () => {
        this.remove()
    }
    coloured.parentNode.insertBefore(audioButton, coloured.nextSibling.nextSibling);
    document.body.appendChild(originalAudio)
}


export default () => { 
    if (i1r.value == 2 &&
        i1n.value == 2 &&
        i2r.value == 3 &&
        i2n.value == 3 &&
        i3r.value == 1 &&
        i3n.value == 1 &&
        i4r.value == 3 &&
        i4n.value == 3) {
        playSound()
    }
}