const keyList = document.querySelectorAll('.key');

function playSound(selector) {
    const element = document.querySelector(selector);

    if (element && element.localName === 'audio') {
        element.play();
    } else {
        console.log("Audio element not found or invalid selector.");
    }
}

for (let i = 0; i < keyList.length; i++) {
    const key = keyList[i];
    const keyId = key.classList[1];
    const audioElementId = `#${keyId}_sound`; //template string

    key.onclick = function () {
        playSound(audioElementId);
    }

    key.onkeydown = function (event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            key.classList.add('active');
        }
    }

    key.onkeyup = function () {
        key.classList.remove('active');
    }
}
