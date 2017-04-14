document.addEventListener('animationstart', function(event) {
  if (event.animationName == 'nodeInserted') {
    const video = document.querySelector('.video-player');
    video.playbackRate = 5;
  }
}, true);
