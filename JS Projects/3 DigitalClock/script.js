const clock = document.getElementById('clock')

setInterval(()=>{
    const date = new Date();
    clock.innerHTML = date.toLocaleString()
},1000)