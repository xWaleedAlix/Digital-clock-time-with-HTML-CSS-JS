let hrs=document.getElementById('hrs')
let min=document.getElementById('min')
let sec=document.getElementById('sec')
let ms=document.getElementById('ms')


setInterval(()=>{
    let currentTime=new Date();
hrs.innerHTML= currentTime.getHours()
min.innerHTML= currentTime.getMinutes()
sec.innerHTML= currentTime.getSeconds()
ms.innerHTML = currentTime.getMilliseconds() % 100;
},10)