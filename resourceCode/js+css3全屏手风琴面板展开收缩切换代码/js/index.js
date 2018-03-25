const panels = document.querySelectorAll('.panel');

function allClose() {
    $('.panel').removeClass('open')
}

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', allClose));
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));