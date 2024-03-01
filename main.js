const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const futureDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 10, 11, 30, 0);

giveaway.textContent = `Giveaway ends on ${weekdays[futureDate.getDay()]}, ${futureDate.getDate()} ${months[futureDate.getMonth()]} ${futureDate.getFullYear()} at ${futureDate.getHours()}:${futureDate.getMinutes()}am`;

const futureTime = futureDate.getTime();

function getCountdownTimer() {
  const currentTime = futureTime - new Date().getTime();

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(currentTime / oneDay);
  let hours = Math.floor((currentTime % oneDay) / oneHour);
  let minutes = Math.floor((currentTime % oneHour) / oneMinute);
  let seconds = Math.floor((currentTime % oneMinute) / 1000);

  [days, hours, minutes, seconds] = [days, hours, minutes, seconds].map(val => val < 10 ? `0${val}` : val);

  items.forEach((item, index) => item.innerHTML = [days, hours, minutes, seconds][index]);

  if (currentTime < 0) {
    clearInterval(countdown);
    const expiredMessage = document.querySelector('.expired-message');
    deadline.innerHTML = `<h4 class="expired expired-message">Giveaway expired! <br/> Check back soon.</h4>`;
    expiredMessage.style.color = 'red';
    expiredMessage.style.fontWeight = 'bold';
    expiredMessage.textContent = expiredMessage.textContent.toUpperCase();
  }
}

let countdown = setInterval(getCountdownTimer, 1000);
getCountdownTimer();
