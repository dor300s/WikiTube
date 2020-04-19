'use strict';

function getVideos(value) {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyAC6hhty9D7R58vK2d60tz4oN8VeHNK47o&q=${value}`)
        .then(res => renderVideos(res.data.items))
}

function getVideo(value) {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyAC6hhty9D7R58vK2d60tz4oN8VeHNK47o&q=${value}`)
        .then(res => res.data.items[0])
        .then(res => {
            renderVideoPlayer(res)
            // getWiki(res.snippet.title)
        })
}

// function getWiki(term){
//     axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${term}&limit=5`)
//     .then(res => console.log(res.data))
// }

