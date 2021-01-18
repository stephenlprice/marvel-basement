var character = "hulk";
var favs = JSON.parse(localStorage.getItem("favorites")) || [];
// Flag to toggle requests between mock and prod servers for AJAX
var mockFlag = true;

// Initialize the page with preset data
function init() {
  // Checks for a character in local storage, if not found then get data from API
  if (favs.length === 0) {
    getCharacter(character);
  }
  else {
    var recentChar = favs.length - 1;
    var initChar = favs[recentChar];
    localCharacter(initChar);
  }
}

// Dropdown Button that displays Favorite Characters
$('.dropdown-trigger').dropdown();
$('.sidenav').sidenav();

// Calls searchCharacter() when a user presses the 'enter' key or submit on an active form
$("form#searchForm").on("submit", function(event) {
  event.preventDefault();
  var character = $("input#search").val().trim().toLowerCase();
  searchCharacter(character);
});

// Calls searchCharacter() when a user clicks on the search icon
$("label.label-icon").on("click", function(event) {
  event.preventDefault();
  var character = $("input#search").val().trim().toLowerCase();
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

// Uses value from search form and calls on getCharacter with built in caching
function searchCharacter(character) {
  // If character input is undefined, null or empty, return message/
  if (!character || character === null || character === undefined || character === "") {
    console.log("please provide a character name");
  }
  // Set charFound flag to true if a matching name in favs array was found for character input
  else {
    var charFound = false;
    for (var i = 0; i < favs.length; i++) {
      if (favs[i].name === character) {
        charFound = true;
        console.log(character + " was found in local storage!");
        // Render character from local storage to the page
        localCharacter(favs[i]);
        break;
      }
    }
    // If after previous for loop, character still not found, then request data from APIs
    if (charFound === false) {
      console.log(character + " was not found, requesting external data...");
      getCharacter(character);
    }
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
    renderCharacter(response);
    var marvelObj = response;
    getGif(character, marvelObj);
  });
}

// Writes character data from the Marvel API to the page
function renderCharacter(marvel) {
  emptyContent();
  $("#heroName").text(marvel.data.results[0].name);
  $("#descriptionText").text(marvel.data.results[0].description);
  $("div.card-content h5").text("Appears In:");
  $("#heroNumbers").append(/*html*/`<p>Comics: ${marvel.data.results[0].comics.available}</p>`);
  $("#heroNumbers").append(/*html*/`<p>Series: ${marvel.data.results[0].series.available}</p>`);
  $("#heroNumbers").append(/*html*/`<p>Stories: ${marvel.data.results[0].stories.available}</p>`);
  $("#heroNumbers").append(/*html*/`<p>Events: ${marvel.data.results[0].events.available}</p>`);
}

// Makes a request for a gif from the Giphy API
function getGif(character, marvelObj) {
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
    renderGif(response);
    var gifObj = response;
    pushLocal(marvelObj, gifObj);
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

// Saves API response attributes to an array of objects in local storage
function pushLocal(marvelObj, gifObj) {
  var charHave = false;
  for (var i = 0; i < favs.length; i++) {
    if (marvelObj.data.results[0].name === favs[i].name) {
      charHave = true;
      console.log(favs[i].name + " was found in local storage! Duplicate will not be saved...");
      break;
    }
  }
  // If after previous for loop, character still not found, then request data from APIs
  if (charHave === false) {
    console.log(marvelObj.data.results[0].name.toLowerCase() + " is a new favorite! Saved to local storage...");
    var name = marvelObj.data.results[0].name;
    var description = marvelObj.data.results[0].description;
    var comics = marvelObj.data.results[0].comics.available;
    var series = marvelObj.data.results[0].series.available;
    var stories = marvelObj.data.results[0].stories.available;
    var events = marvelObj.data.results[0].events.available;
    var gif = gifObj.data[0].embed_url;

    // Object to be pushed to favs and stored in local storage when a character is searched
    var fav = {
      name: name.toLowerCase(),
      description: description,
      comics: comics,
      series: series,
      stories: stories,
      events: events,
      gif: gif
    }

    // Push to favs array and then store array in local storage
    favs.push(fav);
    // If favs exceeds limit, remove the oldest element
    if (favs.length > 10) {
      favs.shift();
    }
    // Write favs array to local storage
    localStorage.setItem("favorites", JSON.stringify(favs));

  }
}

// If character is found in local storage, write it to the page
function localCharacter(character) {
  emptyContent();
  $("#heroName").text(character.name.charAt(0).toUpperCase() + character.name.slice(1));
  $("#descriptionText").text(character.description);
  $("div.card-content h5").text("Appears In:");
  $("#heroNumbers").append(/*html*/`<p>Comics: ${character.comics}</p>`);
  $("#heroNumbers").append(/*html*/`<p>Series: ${character.series}</p>`);
  $("#heroNumbers").append(/*html*/`<p>Stories: ${character.stories}</p>`);
  $("#heroNumbers").append(/*html*/`<p>Events: ${character.events}</p>`);
  $("iframe#heroGif").attr("src", character.gif);  
}

init();