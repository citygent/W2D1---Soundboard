console.log('Hi Jimmy');
soundManager.setup({
  url: '/swf/',
  flashVersion: 9,
  onready: function() {
    setupListeners();
  },
  ontimeout: function() {
    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
  }
});

function setupListeners() {
  hope = document.getElementById('hope');
  hope.addEventListener('click', function (){playSound('hope');});
  king = document.getElementById('king');
  king.addEventListener('click', function (){playSound('king');});
  shimano = document.getElementById('shimano');
  shimano.addEventListener('click', function (){playSound('shimano');});
  campag = document.getElementById('campag');
  campag.addEventListener('click', function (){playSound('campag');});
  white = document.getElementById('white');
  white.addEventListener('click', function (){playSound('white');});
  power = document.getElementById('power');
  power.addEventListener('click', function (){playSound('power');});
}

function playSound(sound){
  var mySound = soundManager.createSound({
    id: mySound,
    url: './sounds/'+sound+'.mp3'
  });
  mySound.play();
}
