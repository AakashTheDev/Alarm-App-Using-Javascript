function setAlarm() {
  let alarmTime = document.getElementById("alarmInput").value;
  var countDownDate = alarmTime.getTime();

  console.log(countDownDate);
  var x = setInterval(function () {
    var now = new Date().getTime();
    console.log(now);
    var distance = countDownDate - now;

    function playsound() {
      let ding = new Audio("sam.mp3");
      ding.play();
    }
    if (distance < 0) {
      playsound();
    }
  }, 100);
}
