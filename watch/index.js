//const main = document.getElementById('main').innerHTML= 'Loading ...'
setTimeout(function(){
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    
    time= hour+':'+ minute+':'+seconds;
    console.log(hour+':'+ minute+':'+seconds);
    
    
    console.log(time)
    document.querySelector('#currentTime').textContent=time;
    
   
},1000);
    
