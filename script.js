
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function func1(){
  let rand1 = Math.floor(Math.random() * (255 - 0) + 0);
  let rand2 = Math.floor(Math.random() * (255 - 0) + 0);
  let rand3 = Math.floor(Math.random() * (255 - 0) + 0);
  //document.body.style.background =rgb(rand1,rand2,rand3);
  var test=document.getElementById('change1');
  // console.log( window.getComputedStyle(test));

  var test1='rgb(' + rand1 + ',' + rand2 + ',' + rand3 + ')';

  var test3=document.body.style.backgroundColor;

  // var test4='rgb(' + rand1 + ',' + rand2 + ',' + rand3 + ')';

  if(test3===test1) func1();



  document.body.style.background = 'rgb(' + rand1 + ',' + rand2 + ',' + rand3 + ')';
  document.getElementById("background_color").innerHTML="Current background Color is :"+ rgbToHex(rand1,rand2,rand3);

}

document.getElementById('change').addEventListener("click", func1);
