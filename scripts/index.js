// DOM elements
const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
    if (user){
        // toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
        $.ajax(settings).done(function (response) {
          console.log(response);
        });
    } else {
        // toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    
    }
}
// setup guides
const setupGuides = (data) => {

    if (data.length) {
        let html = '';
        data.forEach(doc => {
          const guide = doc.data();
          const li = `
            <li>
              <div class="collapsible-header grey lighten-4"> ${guide.User} </div>
              <div class="collapsible-body white"> ${guide.CurrentPage} </div>
            </li>
          `;
          html += li;
        });
        guideList.innerHTML = html
      } else {
        guideList.innerHTML = '<h5 class="center-align">Login to view guides</h5>';
      }
      

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});

// image to text api call
const settings1 = {
  "async": true,
  "crossDomain": true,
  "url": "https://ocrly-image-to-text.p.rapidapi.com/?imageurl=https%3A%2F%2Fi.imgur.com%2Ffx4yoZr.png&filename=idk.jpg",
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "c12f34c8e9msh01784338cef236ep136250jsnc9e9496eeb19",
    "x-rapidapi-host": "ocrly-image-to-text.p.rapidapi.com"
  }
};

$.ajax(settings1).done(function (response) {
  console.log(response);
});