document.addEventListener('animationstart', function(event) {
  if (event.animationName == 'nodeInserted') {
    const video = document.querySelector('.video-player');
    video.playbackRate = 12;
  }
}, true);
