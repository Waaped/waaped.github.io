function myFunction() {
    document.getElementById("raf").src = "./src/assets/images/rafael.PNG";
    document.getElementById("raf").style.opacity = "1";
}



function nightMode(){
   document.body.style.background = "red";
}

  alert('Kept you waiting huh?');


  setTimeout(hideDiv, 30000); //Instead of 10000 put your video's length, in milliseconds BASED STACK OVERLOW
           function hideDiv() {
               document.getElementById("vid").style.display="none";
           }

 setTimeout(delayOpacity2,20000);
                   function delayOpacity2() {
                     document.getElementById("vid").style.opacity="0.9";
                   }
  setTimeout(delayOpacity,10000);
          function delayOpacity() {
            document.getElementById("vid").style.opacity="0.5";
          }


  function loopacity() {

  }
