let div = document.querySelector('.main-menu');
let select = document.querySelector('.se');

div.addEventListener("onmousemove", mouse);

div.addEventListener("onmouseout", down);


function mouse(e) {
    document.querySelector('.main-menu').style.transition = "0.6s ease-in-out";
    document.querySelector('.main-menu').style.backgroundColor = "dodgerblue";
}

function down(w) {
    document.querySelector('.main-menu').style.transition = "0.6s ease-in-out";
    document.querySelector('.main-menu').style.backgroundColor = "lightgray";
}