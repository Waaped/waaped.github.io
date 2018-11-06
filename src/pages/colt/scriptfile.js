
var p1Button =document.querySelector('#p1');
var p2Button =document.getElementById('p2');
var p1Display =document.querySelector("#p1Display");
var p2Display =document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;

gameOver=false;
gamePoint=7;



p1Button.addEventListener("click",function (){
  if(!gameOver){
    p1Score++;
    if(p1Score=== gamePoint){
      gameOver=true;
    }
    p1Display.textContent = p1Score;
  }

});

p2Button.addEventListener("click",function(){
  if(!gameOver){
    p2Score++;
    if(p2Score=== gamePoint){
      gameOver=true;
    }
    p2Display.textContent = p2Score;
  }

});







// function myFunction() {
//    var x = document.getElementsByClassName("example");
//    x[0].innerHTML = "Hello World!";
// }


// var b = document.querySelector("button");

//b.addEventListener("click",function(){
  //document.body.classList.toggle("purple");

  //I can finally use linear gradients or custom background images
  // with this function
// });


//var isPurple= false;

// b.addEventListener("click", function() {
//   if (isPurple){
//     document.body.style.background = "gold";
//     isPurple=false;
//   }
//   else {
//   document.body.style.backgroundColor = "purple";
//   isPurple=true;
// }
// });
//








// let byId = document.querySelector("h1");


//One at a tiem method, good for little chanes, but classlist too OP not to use

// byId.style.color="red";





//had to drag the script file to the bottom of the body element
//bootstrap taught me
//Objects werent loaded, JS console returned null for object that
//technically didnt exist yet..and they say JS is slow..

// if i had known how OP js was for CSS i would have had an eaiser tiem.
// Less JS is best JS tho.


// classList the one thing i have needed all these years lolololol

// p.classList.add('big') //les pretend big is class i created with some lelements, i add it to P
// h1.classList.remove("big")
// p.classList.toggle("big") // on and off


/// TextContent, returns a string of all the text contained in a given elemeent
// <p>bacon bacon </p>

//var byId

//return text content
// byId.TextContent

// "bacon bacon"

// byId.textContent = "blah blah blah blah";
