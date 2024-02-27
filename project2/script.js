const stopwatchDuration = document.getElementById("stopwatchDuration")
start=document.getElementById("start"),
lap=document.getElementById("lap"),
stop=document.getElementById("stop"),
reset=document.getElementById("reset"),
laps=document.getElementById("laps");

let hrs=0,
 mins=0,
 secs =0,
 ms=0,
 timeinterval;

   start.onclick = () =>{
   timeinterval=setInterval(() =>{
    ms++;
    if(ms==100){
        secs++;
        ms=0;

    }
    if(secs==60){
        mins++;
        secs = 0;

    }
    if(mins==60){
        hrs++;
        mins= 0;
    }
   
    stopwatchDuration.innerHTML= `${zeroPad(hrs)} : ${zeroPad(mins)} : ${zeroPad(secs)} : ${zeroPad(ms)}`;
   }, 10);
   start.setAttribute("style", "display:none");
   stop.setAttribute("style", "display:block");
   lap.removeAttribute("disabled");
   
   
   
};

const zeroPad = (num)=>{
    return String(num).padStart(2, "0");
}

let count=0;
lap.onclick = () =>{
    count++;
    let li = document.createElement("li");
    li.innerHTML = ` ${ count} - ${zeroPad(hrs)} : ${zeroPad(mins)} : ${zeroPad(secs)} : ${zeroPad(ms)}`;
    laps.appendChild(li);
    laps.scroll({top: laps.scrollHeight , behaviour: "smooth"});
};

stop.onclick = () =>{
    clearInterval(timeinterval);
    stop.setAttribute("style","display:none");
   start.setAttribute("style","display:block");

};

reset.onclick=()=>{
    laps.innerHTML="";
    hrs=mins=secs=ms=count=0;
    clearInterval(timeinterval);
    stopwatchDuration.innerHTML="00 : 00 : 00 : 00";
}



