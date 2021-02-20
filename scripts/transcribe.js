const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://ocrly-image-to-text.p.rapidapi.com/?imageurl=" + url +"&filename=sample.jpg",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c12f34c8e9msh01784338cef236ep136250jsnc9e9496eeb19",
		"x-rapidapi-host": "ocrly-image-to-text.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});