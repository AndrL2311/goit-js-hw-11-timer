// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2019"),
// });

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
const refs = {
  secs: document.querySelector('span[data-value="secs"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  days: document.querySelector('span[data-value="days"]'),
};

const timer = {
  targetDate: new Date("Aug 30, 2021"),
  start() {
    setInterval(
      () => {
        const time = this.targetDate - Date.now();
        const { days, hours, mins, secs } = getTimeComponent(time);
        console.log(days, ":", hours, ":", mins, ":", secs);
      },
      1000,
      1000
    );
  },
};

timer.start();

function pad(value) {
  return String(value).padStart(2, "0");
}

function differenceInTime() {
  console.log(days, ":", hours, ":", mins, ":", secs);
}

function getTimeComponent(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );

  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}
