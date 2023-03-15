import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const curentTimeFunc = data => {
  localStorage.setItem(CURRENT_TIME_KEY, `${data.seconds}`);
};

player.on('timeupdate', throttle(curentTimeFunc, 1000));
const videoCurrentTime = localStorage.getItem(CURRENT_TIME_KEY);

player.setCurrentTime(videoCurrentTime);
