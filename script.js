const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progressBar = document.getElementById('progress');
const timeStamp = document.getElementById('timestamp');


// pause and play 
function toggleVideoStatus() {
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

// update play/pause icon
function updatePlayIcon() {
    if(video.paused){
        // play.classList.toggle('fa fa-pause fa-2x');
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }else{
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// update progress & timestamp
function updateProgress() {
    progress.value = (video.currentTime/video.duration)*100;

    let mins = Math.floor(video.currentTime / 60);           /*what does Math floor??*/
    console.log(mins);
    if(mins < 10){
        mins = '0' + String(mins);
    }
    // else{
    //     mins =  String(mins);
    // }

    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = '0' + String(secs);
    }


    timeStamp.innerHTML = `${mins}:${secs}`;

    console.log(video.currentTime/video.duration);
    console.log((progress.value*video.duration)/100);
    console.log(progress.value);
    console.log(video.currentTime);
    console.log(video.duration);
}

// set video time to progress 
function setVideoProgress() {
    video.currentTime = (progress.value * video.duration)/100;
}

// stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}


// event listeners

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progressBar.addEventListener('change', setVideoProgress);
