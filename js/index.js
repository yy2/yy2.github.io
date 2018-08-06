
$(document).ready(function() {

   //setInterval(function(){ alert("Hello"); }, 3000);
  var text = '99 little bugs in the code.<99 little bugs in the code.<Take one down, patch it around,<127 little bugs in the code...    <';

  var chars = text.split('');
  var container = document.getElementById("song");

  var i = 0;
  setInterval(function () {
      if (i < chars.length) {
        if(chars[i] == "<") {
          container.innerHTML += "<br/>"
          chars[i++];
        }
        else {
          container.innerHTML += chars[i++];
        }
      } else {
              i = 0;
              container.innerHTML = "";
      }
  }, 130);

});
