const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://imgur-apiv3.p.rapidapi.com/3/image",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"authorization": "921f0dc124dabbe557157cb67358eb40a691f174",
		"x-rapidapi-key": "c12f34c8e9msh01784338cef236ep136250jsnc9e9496eeb19",
		"x-rapidapi-host": "imgur-apiv3.p.rapidapi.com"
	},
	"data": {
		"image": "",
        "type": "base64",
        "id": "page"
	}
};

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
      console.log(screenshot.src);
      //uploadImage(cameraOutput.src);
      uploadImage(screenshot.src)
  };
  
  // Start the video stream when the window loads
  window.addEventListener("load", startCapture(displayMediaOptions), false);

  function uploadImage(message){
    const ref = storage.ref()
    const name = 'input-file'
  // Data URL string
      ref.child(name).putString(message, 'data_url').then(snapshot => snapshot.ref.getDownloadURL())
        .then(url=>{  
      console.log(url);
      settings1.url = "https://ocrly-image-to-text.p.rapidapi.com/?imageurl="+ url + "&filename=input-file.png"
      $.ajax(settings1).done(function (response1) {
        console.log(response1);
      });
    })
  }
  // image to text api call
var url = JSON.parse(sessionStorage.getItem("link"));
const settings1 = {
  "async": true,
  "crossDomain": true,
  "url": "",
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "c12f34c8e9msh01784338cef236ep136250jsnc9e9496eeb19",
    "x-rapidapi-host": "ocrly-image-to-text.p.rapidapi.com"
  }
};

