var accordionX = document.getElementsByClassName('accordionX');
// var panelMaxHeight = panelX.style.maxHeight;

// for (var i = 0; i < accordionX.length; i++) {
//     accordionX[i].addEventListener('click', function() {
//         this.classList.toggle('active');
//         var panelX = this.nextElementSibling;
//         if (panelX.style.maxHeight) {
//             panelX.style.maxHeight = null;
//         } else {
//             panelX.style.maxHeight = panelX.scrollHeight + "px";
//         }
//     });
// }

for (let acc of accordionX) {
    acc.addEventListener('click', function() {
        for (let accX of acc.parentElement.children) {
            accX.classList.remove('active');
            accX.style.maxHeight = null;
        }
        this.classList.toggle('active');
        var panelX = this.nextElementSibling;
        panelX.style.maxHeight = (panelX.style.maxHeight) ? null : panelX.scrollHeight + "px";
    })
}

