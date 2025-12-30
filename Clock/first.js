setInterval(()=>{
let time = new Date();
div.textContent = time.toLocaleTimeString();
},1000)


const div = document.querySelector('div');
