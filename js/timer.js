class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
    this.refs = {
      secs: document.querySelector('span[data-value="secs"]'),
      mins: document.querySelector('span[data-value="mins"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      days: document.querySelector('span[data-value="days"]'),
    };
  }
  start() {
    this.intervalId = setInterval(
      () => {
        const timeLeft = this.targetDate - Date.now();

        if (timeLeft <= 0) {
          clearInterval(this.intervalId);
        }
        const { days, hours, mins, secs } = this.getTimeComponent(timeLeft);
        // console.log(days, ":", hours, ":", mins, ":", secs);
        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;
      },
      1000,
      1000
    );
  }
  //Функция разбивки по дням : часам : минутам : секундам
  getTimeComponent(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );

    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
  // Функция добавления нуля спереди
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aug 31, 2021"),
});

timer.start();
