document.addEventListener('DOMContentLoaded', musicPlay);
function musicPlay() {
    document.getElementById('audio').play();
    document.removeEventListener('DOMContentLoaded', musicPlay);
}