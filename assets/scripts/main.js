function playSound(selector) {
    const element = document.querySelector(selector);
    const validElement = element && element.localName === 'audio';

    if (!validElement) {
        return console.log("Audio element not found or invalid selector.");
    }
    
    element.play();
}

const keyList = document.querySelectorAll('.key');

for (let i = 0; i < keyList.length; i++) {
    const key = keyList[i];
    const keyId = key.classList[1];
    const audioElementId = `#${keyId}_sound`; //template string

    key.onclick = function () {
        playSound(audioElementId);
    }

    key.onkeydown = function (event) {
        const active = event.code === 'Enter' || event.code === 'Space';

        if (active) {
            key.classList.add('active');
        }
    }

    key.onkeyup = function () {
        key.classList.remove('active');
    }
}
