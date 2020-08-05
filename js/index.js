function navmenubar(){
  var x = document.getElementById("mymenu");
  if(x.className === "menubar"){
    x.className += " responsive";
  }
  else{
    x.className = "menubar";
  }
}