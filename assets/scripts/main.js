const keyList = document.querySelectorAll('.key');

function playSound(audioElementId) {
    document.querySelector(audioElementId).play();
}

for (let i = 0; i < keyList.length; i++) {
    const key = keyList[i];
    const keyId = key.classList[1];
    const audioElementId = `#${keyId}_sound`; //template string

    key.onclick = function () {
        playSound(audioElementId);
    }
}
