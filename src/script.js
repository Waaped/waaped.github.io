function myFunction() {
    document.getElementById("raf").src = "./src/assets/images/rafael.PNG";
    document.getElementById("raf").style.opacity = "1";
}



// function NetworkDetect() {
//   NetworkInformation = navigator.connection
//   if (NetworkInformation.type == 'cellular') {
//     document.getElementById('vid').style.display="none";
//     console.log('Debug');
//   }
// }

function loopedInput(bacon){
  if (bacon = 'hello World'){
  }
}

let ua = navigator.userAgent.toLowerCase();
let is_safari = (ua.indexOf("safari/") > -1 && ua.indexOf("chrome") < 0);
if(is_safari) {
    let video = document.getElementById('#vid');
    setTimeout(function() {
       video.play();
    }, 50);
}
 //via Stak overflow, Dirty Safari work around,  'is ok to mickey mouse sometimes-honda awesome slavic guy'

function nightMode(){
   document.body.style.background = "#fff";
}

  alert('Kept you waiting huh?, Page under Construction');


  //setTimeout(hideDiv, 30000); //Instead of 10000 put your video's length, in milliseconds BASED STACK OVERLOW
      //     function hideDiv() {
      //         document.getElementById("vid").style.display="none";
        //   }

 setTimeout(delayOpacity2,20000);
                   function delayOpacity2() {
                     document.getElementById("vid").style.opacity="0.25";
                   }
  setTimeout(delayOpacity,10000);
          function delayOpacity() {
            document.getElementById("vid").style.opacity="0.9";
          }


  function loopacity() {

  }
