const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://url-to-screenshot.p.rapidapi.com/get?url=http%3A%2F%2Fwww.google.com&width=1024&height=-1&mobile=0&allocated_time=2.0&base64=0",
	"method": "GET",
	"headers": {
		"accept": "image/png",
		"x-rapidapi-key": "c12f34c8e9msh01784338cef236ep136250jsnc9e9496eeb19",
		"x-rapidapi-host": "url-to-screenshot.p.rapidapi.com"
	}
};
$(document).ready(function() {
    $("#create-form").submit(function() {
        $.ajax(settings).done(function (response) {
            console.log(response);
            alert("Done!")
        });
    });
});

