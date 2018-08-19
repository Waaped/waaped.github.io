//refactored




function bgDate(){
  var d = new Date()
  var time = d.getHours()

  if (time > 10)
  {
  alert("Hey Listen");
  document.getElementByClass("bg").style.backgroundColor = "blue";
  }
}
