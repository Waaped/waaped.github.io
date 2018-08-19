//refactored

function date(){
  var d = new Date();
  var time = d.getHours();

  if (time > 10){
  alert("Night mode");
  document.body.style.backgroundColor = "brown";
}
else{
  document.body.style.background = "green";
}

}
