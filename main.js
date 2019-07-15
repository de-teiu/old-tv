window.onload = function () {
    setTimeout(function () {
        const element = document.getElementById('txt-video');
        element.parentNode.removeChild(element);
    }, 3000);
}