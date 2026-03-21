(function () {
  let sec = 0,
    min = 0,
    hour = 0,
    interval;

  const stopwatch = document.querySelector('.stopwatch');
  const startBtn = document.querySelector('.start');
  const stopBtn = document.querySelector('.stop');
  const pauseBtn = document.querySelector('.pause');

  function updateTime() {
    sec++;
    if (sec >= 60) {
      min++;
      sec = 0;
    }
    if (min >= 60) {
      hour++;
      min = 0;
    }
    if (stopwatch) {
      stopwatch.textContent = `
      ${String(hour).padStart(2, '0')} : 
      ${String(min).padStart(2, '0')} : 
      ${String(sec).padStart(2, '0')}
      `;
    }
  }

    startBtn.addEventListener('click', () => {
        interval = setInterval(updateTime, 1000);
    });
  
    pauseBtn.addEventListener('click', () => {
      clearInterval(interval);
    });

    stopBtn.addEventListener('click', () => {
      clearInterval(interval);
      sec = 0;
      min = 0;
      hour = 0;
        stopwatch.textContent = '00  :00 : 00';
    });
})()

(function () {
  let sec = 60,
    min = 5,
    hour = 0,
    interval;

  const timer = document.querySelector('.timer');
  const startBtn = document.querySelector('.timer-start');
  const stopBtn = document.querySelector('.timer-stop');
  const pauseBtn = document.querySelector('.taimer-pause');

  function updateTime() {
    sec--;
    if (sec < 60) {
      min--;
      sec = 60;
    }
    if (min <= 60) {
      hour--;
      min = 60;
    }
    if (stopwatch) {
      stopwatch.textContent = `
      ${String(hour).padStart(2, '0')}:
      ${String(min).padStart(2, '0')}:
      ${String(sec).padStart(2, '0')}
      `;
    }
  }

    startBtn.addEventListener('click', () => {
        interval = setInterval(updateTime, 1000);
    });
  
    pauseBtn.addEventListener('click', () => {
      clearInterval(interval);
    });

    stopBtn.addEventListener('click', () => {
      clearInterval(interval);
      sec = 0;
      min = 0;
      hour = 0;
        stopwatch.textContent = '00:00:00';
    });
})()