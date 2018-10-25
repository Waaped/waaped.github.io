//refactored
//Every object has a toString() method that is automatically called when the object is to be represented
//by a text value


/*

Seems like a good option, other frameworks prolly have a solution, but lol

<script type="text/javascript" src="http://www.datejs.com/build/date.js"></script>

(function ()
  {
     document.write(new Date().toString("hh:mm tt"));
  })();
*/

// Tiem!
function date(){
  let d = new Date();
  let time = d.getHours();
  let time1 = d.getMinutes();
  let time2 = d.getSeconds();

  if (time1 <10){
    time1="0"+time1;
  }
  if (time2 <10){
    time2="0"+time2;
  }

let combo = time+":"+time1+":"+time2;


console.log(combo);
