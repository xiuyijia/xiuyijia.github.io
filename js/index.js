(function(){
  var desk = document.getElementById('desk');
  var links = desk.getElementsByTagName('a');
  for(var i=0;i<links.length;i++){  links[i].addEventListener('click',handler,false);
  };
  function handler(e){
    e.preventDefault();
    var x = e.target; 
    var video = x.querySelector("video");
    x.play();
    x.parentNode.classList.add('playing');
  };
 })();