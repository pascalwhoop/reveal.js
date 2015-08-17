var onError = function (e) {
    console.log('Reeeejected!', e);
};

var onSuccess = function (localMediaStream) {
    var video = document.getElementById('webcamvideo');
    video.src = window.URL.createObjectURL(localMediaStream);

    console.log("im alive!!!!");

    navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;


}

navigator.getUserMedia({video: true, audio: false}, onSuccess, onError);


