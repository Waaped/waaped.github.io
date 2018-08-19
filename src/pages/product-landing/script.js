//refactored

function date(){
  let d = new Date();
  let time = d.getHours();
  let time1 = d.getMinutes();
  let time2 = d.getSeconcs();

  if (time1 >10){
    time1=0+"time1";
  }
  let combo = time+":"+time1;


console.log(combo);

  if (time > 10){
  document.body.style.backgroundColor = "brown";
  }
else {
  document.body.style.background = "linear-gradient(#e66465, #9198e5)"
      }

}
