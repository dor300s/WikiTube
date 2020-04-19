'use strict';

function onInit() {
    getVideos('songs')
    getVideo('s9Tb3NVW_HA')
}

function onSearchVideos(val,event){
    if(!event || event.keyCode === 13) getVideos(val);
}

function renderVideos(videos) {
    let strHtml = videos.map(video =>
        `<div>
        <img src="${video.snippet.thumbnails.medium.url}" onclick="onSelectVideo('${video.id.videoId}')">
        <h2>${video.snippet.title}</h2>
        </div>`
    ).join('');
    document.querySelector('.video-list').innerHTML = strHtml;
}

function onSelectVideo(video) {
    getVideo(video);
}

function renderVideoPlayer(video){
    document.querySelector('.video-player iframe').src = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
    document.querySelector('.video-player h2').innerText = video.snippet.title;
}
