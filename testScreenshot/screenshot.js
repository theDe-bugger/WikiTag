function setup(){
    var picturelinks = ""
    sessionStorage.setItem("picturelinks",JSON.stringify(picturelinks))
  }

const screenView = document.querySelector("#screen--view"),
    screenshot = document.querySelector("#screen--output"),
    screenSensor = document.querySelector("#screen--sensor"),
    screenTrigger = document.querySelector("#screen--trigger");
// Options for getDisplayMedia()
var displayMediaOptions = {
  video: {
    cursor: "never"
  },
  audio: false
};
var track = null;
// Set event listeners for the start and stop buttons
// Start the video stream when the window loads
window.addEventListener("load", startCapture(displayMediaOptions));

  // Access Screen to start recording
  function startCapture(displayMediaOptions) {
    return navigator.mediaDevices.getDisplayMedia(displayMediaOptions).then(function(stream){
        track = stream.getTracks()
        screenView.srcObject = stream;
    }).catch(err => { console.error("Error:" + err); return null; });
   }

  // Take a picture when Capture is tapped
  screenTrigger.onclick = function() {
      screenSensor.width = screenView.videoWidth;
      screenSensor.height = screenView.videoHeight;
      screenSensor.getContext("2d").drawImage(screenView, 0, 0);
      screenshot.src = screenSensor.toDataURL("image/png");
      screenshot.classList.add("taken");
      //uploadImage(cameraOutput.src);
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
  };
  
  // Start the video stream when the window loads
  window.addEventListener("load", startCapture(displayMediaOptions), false);

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://ocrly-image-to-text.p.rapidapi.com/?imageurl=https%3A%2F%2Fi.imgur.com%2Ffx4yoZr.png&filename=idk.jpg",
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "c12f34c8e9msh01784338cef236ep136250jsnc9e9496eeb19",
      "x-rapidapi-host": "ocrly-image-to-text.p.rapidapi.com"
    }
  };
  
  
 