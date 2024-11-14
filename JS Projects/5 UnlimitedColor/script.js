//Random color generator =>

const randomColor = function(){
    const hax = "123456789ABCDEF";
    let color = "#"

    for(let i=0; i<6; i++){
        color += hax[Math.floor(Math.random()*16)]
    }
    return color;
}

let stopFun;
function startChangingColor(){

    if(!stopFun){
        stopFun = setInterval(changeBgColor,1000)
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

function stopChangingColor(){
    clearInterval(stopFun)
    stopFun = null;
}

document.querySelector("#start").addEventListener('click',startChangingColor)

document.querySelector("#stop").addEventListener('click',stopChangingColor)