import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector(`iframe`);
const player = new Player(iframe);
function handleTimeUpdate(event) {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}

player.on('timeupdate', throttle(handleTimeUpdate, 1000));

window.addEventListener('load', async () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    await player.setCurrentTime(savedTime);
  }
});
