
var count =0;
setInterval(function(){
    count++;
    if(count>5){
        count=1;
    }
    var radio=document.getElementById("btn"+count)
    radio.checked=true
}, 5000)

