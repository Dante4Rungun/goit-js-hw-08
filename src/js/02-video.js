import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";   
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe)

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

const trot_fun = throttle(() => {
    player.getCurrentTime().then(function(seconds) {
    // seconds = the current playback position
    localStorage.setItem("videoplayer-current-time",seconds)
}).catch(function(error) {
    // an error occurred
});
}, 1000)


player.on('play', function() {
    console.log('played the video!');
});

player.on('timeupdate', () => {
    trot_fun()
})

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});



