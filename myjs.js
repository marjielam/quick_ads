const adContainer = document.querySelector('.ad-top-bar-container');

document.addEventListener('animationstart', function(event) {
  if (event.animationName == 'nodeInserted') {
    const myVideo = document.querySelector('.video-player');
    myVideo.playbackRate = 5;
  }
}, true);
