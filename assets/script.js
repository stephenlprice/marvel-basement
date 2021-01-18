var character = "hulk";
var favs = JSON.parse(localStorage.getItem("favorites")) || [];
// Flag to toggle requests between mock and prod servers for AJAX
var mockFlag = true;
// Object to be pushed to favs and stored in local storage when a character is searched
var fav = {
  name: "",
  gif: ""
}


// Initialize the page with preset data
function init() {
  // Todo use the most recent character saved to local storage
  getCharacter(character);
  getGif(character);
}
// Dropdown Button that displays Favorite Characters
$('.dropdown-trigger').dropdown();

// Calls searchCharacter() when a user presses the 'enter' key or submit on an active form
$("form#searchForm").on("submit", function(event) {
  event.preventDefault();
  var character = $("input#search").val().trim();
  searchCharacter(character);
});

// Calls searchCharacter() when a user clicks on the search icon
$("label.label-icon").on("click", function(event) {
  event.preventDefault();
  var character = $("input#search").val().trim();
  searchCharacter(character);
});

// Clear the search bar of text
$("i#clearSearch").on("click", function(event) {
  event.preventDefault();
  $("input#search").val("");
});

// Calls searchCharacter() with the provided 'data-character' attribute from Popular Characters
$("ul#nav-mobile li a").on("click", function(event) {
  event.preventDefault();
  var character = $(this).attr("data-character");
  searchCharacter(character);
});

// Uses value from search form and calls on getCharacter
function searchCharacter(character) {
  if (!character || character === null || character === undefined || character === "") {
    console.log("please provide a character name");
  }
  else {
    getCharacter(character);
    getGif(character);
  }
}

// Makes a request for character information from the Marvel API
function getCharacter(character) {
  // Settings for mock server requests
  var preferHeader = "code=200, example=" + character;
  var mockpath = "https://stelloprint.stoplight.io/mocks/stelloprint/marvel-basement-apis/5007456/v1/public/characters?";
  
  // Settings for prod server requests
  var path = "https://gateway.marvel.com:443/v1/public/characters?";

  var params = {
    name: character,
    apikey: "ba771d6381f28dcffac6f36592d1949b"
  };

  // Toggles request settings based on mockFlag value
  if (mockFlag === true) {
    // settings for mock API
    var url = mockpath + $.param(params);

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": url,
      "method": "GET",
      "headers": {
        "Prefer": preferHeader
      }
    };
  }
  else {
    // settings for production Marvel API
    var url = path + $.param(params);

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": url,
      "method": "GET"
    };
  }
  
  $.ajax(settings).done(function (response) {
    console.log(url);
    console.log(response);
    // Saves the character name to fav object
    fav.name = response.data.results[0].name;
    renderCharacter(response);
  });
}

// Writes character data from the Marvel API to the page
function renderCharacter(marvel) {
  emptyContent();
  $("#heroName").text(marvel.data.results[0].name)
  $("#descriptionText").text(marvel.data.results[0].description);
  $("div.card-content h5").text("Appears In:");
  $("#heroNumbers").append(/*html*/`<p>Comics: ${marvel.data.results[0].comics.available}</p>`);
  $("#heroNumbers").append(/*html*/`<p>Series: ${marvel.data.results[0].series.available}</p>`);
  $("#heroNumbers").append(/*html*/`<p>Stories: ${marvel.data.results[0].stories.available}</p>`);
  $("#heroNumbers").append(/*html*/`<p>Events: ${marvel.data.results[0].events.available}</p>`);
}

// Makes a request for a gif from the Giphy API
function getGif(character) {
  // Settings for mock server requests
  var preferHeader = "code=200, example=" + character;
  var mockpath = "https://stelloprint.stoplight.io/mocks/stelloprint/marvel-basement-apis/5009495/gifs/search?";

  // Settings for prod server requests
  var path = "https://api.giphy.com/v1/gifs/search?";

  var params = {
    q: character,
    limit: 25,
    offset: 0,
    rating: "g",
    lang: "en",
    api_key: "DDFZ1a8NNQfa6GQa23FoUELp6Ltmh0qI"
  };

  // Toggles request settings based on mockFlag value
  if (mockFlag === true) {
    var url = mockpath + $.param(params);
    // Settings for mock API 
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": url,
      "method": "GET",
      "headers": {
        "Prefer": preferHeader
      }
    };
  }
  // Settings for Giphy API
  else {
    var url = path + $.param(params);
    
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": url,
      "method": "GET"
    };
  }

  $.ajax(settings).done(function (response) {
    console.log(url);
    console.log(response);
    // Saves the character gif to local storage
    fav.gif = response.data[0].embed_url;
    renderGif(response);
  });
}

// Embeds the gif unto the provided iframe
function renderGif(giphy) {
  var gifURL = giphy.data[0].embed_url;
  $("iframe#heroGif").attr("src", gifURL);
}

// Clears character data from the page
function emptyContent() {
  $("#heroNumbers").empty();
}

// Saves variables to an array of objects in local storage
function pushLocal() {
  if (fav.name === "" || fav.gif === "") {
    console.log("cannot store an incomplete character object");
  }
  else {
    
  }

  console.log(fav);
  // Push the fav to the favs array and store the update in local storage
  favs.push(fav);
  localStorage.setItem("favorites", JSON.stringify(favs));
}

init();