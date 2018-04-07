var canvas = $('#clock').get(0);
var context = canvas.getContext('2d');


setInterval(function() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var milliseconds = date.getMilliseconds();
  
  var hourLength = 20;
  var hourAngle = 360 * hours / 24;
  
  var minuteLength = 30;
  var minuteAngle = 360 * minutes / 60;
  
  var secondLength = 40;
  var secondAngle = 360 * seconds / 60;
  
  var millisecondLength = 45;
  var millisecondAngle = 360 * milliseconds / 1000;
  

  clearCanvas();
  context.fillStyle = 'white';
  drawAngledLine(context, 50, 50, hourLength, hourAngle)
  drawAngledLine(context, 50, 50, minuteLength, minuteAngle)
  drawAngledLine(context, 50, 50, secondLength, secondAngle)
  drawAngledLine(context, 50, 50, millisecondLength, millisecondAngle)
}, 1);


function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1)
  context.lineTo(x2, y2);
  context.stroke();
}

function drawAngledLine(context, x1, y1, radius, degrees) {
  var radians = degrees * Math.PI / 180;
  var x2 = x1 + radius * Math.cos(radians)
  var y2 = y1 + radius * Math.sin(radians)
  drawLine(context, x1, y1, x2, y2);
}

function clearCanvas() {
  context.filStyle = 'white';
  context.fillRect(0, 0, 100, 100)
}
