//refactored

function date(){
  var d = new Date();
  var time = d.getHours();

  if (time < 10)
  {
  alert("Hey Listen");
  document.body.style.backgroundColor = "brown";
}
}
