const menuBtn = document.getElementById('menu');
let menuActive = false;

menuBtn.onclick = function() {
    menuActive = !menuActive;
    
    if(menuActive){
        menuBtn.innerText = 'close';
        return;
    }

    menuBtn.innerText = 'menu';
};