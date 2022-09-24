const ham = document.getElementById('hamburger');
const navul = document.getElementById('navul');
function show__content(){
    navul.classList.toggle('show');
}
// var days = setInterval(countDays, 100);
// var student= setInterval(countStudents, 1000);
// var prof = setInterval(countProfessors, 100);
var prf = 0;
var std = 0;
var i=0 ;

var inv = setInterval(function countDays() { 
    document.getElementById('days').innerHTML = i++;
   if(i===101){
       clearInterval(inv);
   }
}, 200);

var inv1 = setInterval(function countStudents() { 
    document.getElementById('STUDENTonly').innerHTML = std++;    
   if(std===21){
       clearInterval(inv1);
   }
   
}, 200);

var inv2 = setInterval(function countProfessors() { 
    document.getElementById('profnumbers').innerHTML = prf++;
      
   if(prf===11){

       clearInterval(inv2);
   }
   
}, 200);