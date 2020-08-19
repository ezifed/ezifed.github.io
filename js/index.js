function navmenubar(){
  var x = document.getElementById("mymenu");
  if(x.className === "menubar"){
    x.className += " responsive";
  }
  else{
    x.className = "menubar";
  }
}

function time(){
  var d = new Date();
  document.getElementById("time") = d;
}