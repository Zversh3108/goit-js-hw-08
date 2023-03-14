import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const currentTimeKey = 'videoplayer-current-time';

const curentTimeFunc = data => {

  localStorage.setItem(currentTimeKey, `${data.seconds}`);
};

player.on('timeupdate', throttle(curentTimeFunc, 1000));
const videoCurrentTime = localStorage.getItem(currentTimeKey);

player
  .setCurrentTime(videoCurrentTime)
 