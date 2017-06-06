var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
  document.body.className = 'body-state'+state;

  clearInterval(timer);
  countdownNumber = 10;
  document.getElementById('countdown').innerHTML = countdownNumber;

  // countdown
  if (state == 2) {
    timer = setInterval(function() {
      countdownNumber = countdownNumber - 1;
      document.getElementById('countdown').innerHTML = countdownNumber;

      if (countdownNumber > 4 && countdownNumber <= 7) {
        //be nervous
        document.getElementById('nervous').className = 'nervous show'
      } else {
        document.getElementById('nervous').className = 'nervous'
      };

      if (countdownNumber > 1 && countdownNumber <= 4) {
        document.getElementById('cantWait').className = 'cantWait show'
      } else {
        document.getElementById('cantWait').className = 'cantWait'
      };

      if (countdownNumber <= 0) {
        changeState(3);
      };
    }, 500);
  } else if (state == 3) {
    var success = setTimeout(function () {
      var randomNumber = Math.round(Math.random()*10);
      console.log('randomNumber: ', randomNumber )
      //succes
      if (randomNumber > 3) {
        changeState(4);
      } else {
        changeState(5); // Oh No!
      }
    }, 2000);
  };

}
