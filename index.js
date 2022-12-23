// start button access
let start =document.getElementById('start');
// stop button access
let stop =document.getElementById('stop');
// rest button access
let rest =document.getElementById('rest');
// save button access
let save =document.getElementById('save');
let mintue =00;
// mintue ko av 0 me set kiye hai
let sec =00;
// sec ko av 0 me set kiye hai
let hour =00;
// hour ko av 0 me set kiye hai
let min;
let hr;
let span;
let Interval;
let check =false;

// start button ke liye addEventLisner Q ki start button par click krne par function start ho
start.addEventListener('click',function(){
     check = true;
    Interval = setInterval(timer,1000);
    
});
// stop ke liye click function hai Q ki hum function ko stop kr ske 
stop.addEventListener('click',function(){
    check=false;
    clearInterval(Interval);

    });

// rest ke liye click function esliye kiye Q ki jab rest kre to humare sare hour mintie second 0 ho jaye
rest.addEventListener('click',function(){
    check=false;
    clearInterval(Interval);
       
        mintue =00;
        sec =00;
        hour =00;
        span.innerHTML ='0'+0;
        min.innerHTML ='0'+0;
        hr.innerHTML ='0'+0;
})

// timer function jisme function work kr raha hai with condition
function timer(){
    if(check==true){
    span =document.getElementById('second');

   if(sec<9){
       span.innerHTML="0"+sec ;
   }
   if(sec>9){
       span.innerHTML=sec;
   }
  if(sec>59){
   span.innerHTML='00';
  }
   if(sec == 60){
      
      min =document.getElementById('mintue');
       mintue++;
       if(mintue<9){
           min.innerHTML="0"+mintue;
       }
      if(mintue>9){
       min.innerHTML=mintue;
      }
      if(mintue>59){
       min.innerHTML="00";
      }
        sec*=0; 
   }
   
   
  if(mintue==60){
   
    hr =document.getElementById('hour');
   hour++;
    if(hour<9){
       hr.innerHTML ='0'+hour;
    }
    if(hour>9){
       hr.innerHTML =hour;
    }
  
       mintue*=0;         
  }
   sec++;
    }
    
}