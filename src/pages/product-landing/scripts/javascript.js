
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


var vid = document.getElementById('#video');

vid.addEventListener("scroll",function(){
  //anon function
vid.style.display="none";
});
