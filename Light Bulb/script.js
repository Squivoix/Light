let lightBulb = document.querySelector("#lightBulb");

lightBulb.addEventListener("mouseover", on);
lightBulb.addEventListener("mouseleave", off);
lightBulb.addEventListener("dblclick", crack);

function on() {

    lightBulb.src = "imgs/light_on.png";
}

function off() {
    lightBulb.src = "imgs/light_off.png";
}

function flick() {
    let interval = 0;

    for (let i = 0; i < 10; i++) {
        interval += 150;

        setTimeout("lightBulb.src = 'imgs/light_on.png'", interval);
        interval += 150;
        setTimeout("lightBulb.src = 'imgs/light_off.png'", interval);
    }
}

function crack() {
    lightBulb.src = "imgs/light_broken.png";
}
