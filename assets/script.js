// Dropdown Button
$('.dropdown-trigger').dropdown();
var character = "hulk";

// Initialize the page with preset data
function init() {
  // Todo use the most recent character saved to local storage
  getCharacter(character);
  rendergif();
}

// Gets the value inserted into the search input and makes requests for data
$("form#searchForm").on("submit", function(event) {
  event.preventDefault();
  // TODO empty all elements from previous character
  var character = $("input#search").val().trim();
   console.log(character);
  getCharacter(character);
});

// Sample Marvel Object
var marvel = {
    "code": 200,
    "status": "Ok",
    "copyright": "© 2021 MARVEL",
    "attributionText": "Data provided by Marvel. © 2021 MARVEL",
    "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2021 MARVEL</a>",
    "etag": "34928986f82b20558efa033c02e009a084b018c6",
    "data": {
      "offset": 0,
      "limit": 20,
      "total": 1,
      "count": 1,
      "results": [
        {
          "id": 1009351,
          "name": "Hulk",
          "description": "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
          "modified": "2020-07-21T10:35:15-0400",
          "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0",
            "extension": "jpg"
          },
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009351",
          "comics": {
            "available": 1671,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009351/comics",
            "items": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/41112",
                "name": "5 Ronin (Hardcover)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/36365",
                "name": "5 Ronin (2010) #2"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/38753",
                "name": "5 Ronin (2010) #2 (BROOKS COVER)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/43488",
                "name": "A+X (2012) #1"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/43506",
                "name": "A+X (2012) #7"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/77060",
                "name": "Absolute Carnage: Immortal Hulk (2019) #1"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/320",
                "name": "Actor Presents Spider-Man and the Incredible Hulk (2003) #1"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/38524",
                "name": "Age of X: Universe (2011) #1"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/38523",
                "name": "Age of X: Universe (2011) #2"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/24053",
                "name": "All-New Savage She-Hulk (2009) #1"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/24252",
                "name": "All-New Savage She-Hulk (2009) #2"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/12689",
                "name": "Alpha Flight (1983) #29"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/12650",
                "name": "Alpha Flight (1983) #110"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/12651",
                "name": "Alpha Flight (1983) #111"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/12668",
                "name": "Alpha Flight (1983) #127"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/6527",
                "name": "The Amazing Spider-Man (1963) #14"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/35528",
                "name": "Amazing Spider-Man (1999) #667"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/16904",
                "name": "Amazing Spider-Man Annual (1964) #3"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/16886",
                "name": "Amazing Spider-Man Annual (1964) #12"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/comics/36956",
                "name": "Amazing Spider-Man Annual (2011) #38"
              }
            ],
            "returned": 20
          },
          "series": {
            "available": 475,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009351/series",
            "items": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/12429",
                "name": "5 Ronin (2010)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/15276",
                "name": "5 Ronin (2011)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
                "name": "A+X (2012 - 2014)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/27632",
                "name": "Absolute Carnage: Immortal Hulk (2019)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/458",
                "name": "Actor Presents Spider-Man and the Incredible Hulk (2003)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/13896",
                "name": "Age of X: Universe (2011)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/7231",
                "name": "All-New Savage She-Hulk (2009)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
                "name": "Alpha Flight (1983 - 1994)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
                "name": "Amazing Spider-Man (1999 - 2013)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
                "name": "Amazing Spider-Man Annual (1964 - 2018)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/13205",
                "name": "Amazing Spider-Man Annual (2011)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/24323",
                "name": "Ant-Man and the Wasp Adventures (2018)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
                "name": "Avengers (1996 - 1997)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
                "name": "Avengers (1963 - 1996)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
                "name": "Avengers (1998 - 2004)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/22547",
                "name": "Avengers (2016 - 2018)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
                "name": "Avengers (2010 - 2012)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/9859",
                "name": "Avengers & the Infinity Gauntlet (2010)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/24044",
                "name": "Avengers & The Infinity Gauntlet (2018)"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
                "name": "Avengers Annual (1967 - 1994)"
              }
            ],
            "returned": 20
          },
          "stories": {
            "available": 2556,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009351/stories",
            "items": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/702",
                "name": "INCREDIBLE HULK (1999) #62",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/703",
                "name": "Interior #703",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/704",
                "name": "INCREDIBLE HULK (1999) #63",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/705",
                "name": "Interior #705",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/706",
                "name": "INCREDIBLE HULK (1999) #64",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/707",
                "name": "Interior #707",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/872",
                "name": "HULK: GRAY (2003) #2",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/873",
                "name": "Interior #873",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/874",
                "name": "HULK: GRAY (2003) #3",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/875",
                "name": "Interior #875",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1134",
                "name": "Interior #1134",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1217",
                "name": "INCREDIBLE HULK (1999) #68",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1218",
                "name": "Interior #1218",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1219",
                "name": "INCREDIBLE HULK (1999) #69",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1220",
                "name": "Interior #1220",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1221",
                "name": "INCREDIBLE HULK (1999) #70",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1222",
                "name": "Interior #1222",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1223",
                "name": "INCREDIBLE HULK (1999) #71",
                "type": "cover"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1224",
                "name": "Interior #1224",
                "type": "interiorStory"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/1225",
                "name": "INCREDIBLE HULK (1999) #75",
                "type": "cover"
              }
            ],
            "returned": 20
          },
          "events": {
            "available": 26,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009351/events",
            "items": [
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
                "name": "Acts of Vengeance!"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
                "name": "Age of X"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
                "name": "Chaos War"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
                "name": "Dark Reign"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/297",
                "name": "Fall of the Hulks"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
                "name": "Fall of the Mutants"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
                "name": "Fear Itself"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
                "name": "House of M"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
                "name": "Infinity"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
                "name": "Infinity War"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/317",
                "name": "Inhumanity"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
                "name": "Initiative"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/311",
                "name": "Marvel NOW!"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
                "name": "Maximum Security"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
                "name": "Onslaught"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/319",
                "name": "Original Sin"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/266",
                "name": "Other - Evolve or Die"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/212",
                "name": "Planet Hulk"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/295",
                "name": "Realm of Kings"
              },
              {
                "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                "name": "Secret Invasion"
              }
            ],
            "returned": 20
          },
          "urls": [
            {
              "type": "detail",
              "url": "http://marvel.com/characters/25/hulk?utm_campaign=apiRef&utm_source=ba771d6381f28dcffac6f36592d1949b"
            },
            {
              "type": "wiki",
              "url": "http://marvel.com/universe/Hulk_(Bruce_Banner)?utm_campaign=apiRef&utm_source=ba771d6381f28dcffac6f36592d1949b"
            },
            {
              "type": "comiclink",
              "url": "http://marvel.com/comics/characters/1009351/hulk?utm_campaign=apiRef&utm_source=ba771d6381f28dcffac6f36592d1949b"
            }
          ]
        }
      ]
    }
  }

function getCharacter(character) {

  // Settings for mock server requests
  var preferHeader = "code=200, example=" + character;
  var path = "https://stelloprint.stoplight.io/mocks/stelloprint/marvel-basement-apis/5007456/v1/public/characters";
  var name = "?name=" + character;
  var app = "&apikey=";
  var cred = "ba771d6381f28dcffac6f36592d1949b";

  var url = path + name + app + cred;

  const settingsMock = {
    "async": true,
    "crossDomain": true,
    "url": url,
    "method": "GET",
    "headers": {
      "Prefer": preferHeader
    }
  };
  
  $.ajax(settingsMock).done(function (response) {
    console.log(response);
  });
}

// Meta Data------------------
function hulkInitial() {
  $("#heroName").text(marvel.data.results[0].name)
  $("#descriptionText").text(marvel.data.results[0].description);
  $("#heroNumbers").append(/*html*/`<p>Comics: ${marvel.data.results[0].comics.available}</p>`);
  $("#heroNumbers").append(/*html*/`<p>Series: ${marvel.data.results[0].series.available}</p>`);
  $("#heroNumbers").append(/*html*/`<p>Stories: ${marvel.data.results[0].stories.available}</p>`);
  $("#heroNumbers").append(/*html*/`<p>Events: ${marvel.data.results[0].events.available}</p>`);

  //------------------Need Hulk GIF------------------
}

hulkInitial();

// Sample Hulk Gif from Giphy
var giphy = {
    "data":
    [
        {
            "type": "gif",
            "id": "xFBnkMvpTM6m4",
            "url": "https://giphy.com/gifs/hulk-the-xFBnkMvpTM6m4",
            "slug": "hulk-the-xFBnkMvpTM6m4",
            "bitly_gif_url": "http://gph.is/1KgscaF",
            "bitly_url": "http://gph.is/1KgscaF",
            "embed_url": "https://giphy.com/embed/xFBnkMvpTM6m4",
            "username": "",
            "source": "http://www.comicvine.com/forums/battles-7/hulk-and-the-thing-vs-darkseid-1643403/",
            "title": "hulk smash GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.comicvine.com",
            "source_post_url": "http://www.comicvine.com/forums/battles-7/hulk-and-the-thing-vs-darkseid-1643403/",
            "is_sticker": 0,
            "import_datetime": "2015-05-18 21:25:03",
            "trending_datetime": "1970-01-01 00:00:00",
            "images":
            {
                "original":
                {
                    "height": "355",
                    "width": "500",
                    "size": "1526270",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=giphy.gif",
                    "mp4_size": "275163",
                    "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy.mp4?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=giphy.mp4",
                    "webp_size": "371678",
                    "webp": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy.webp?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=giphy.webp",
                    "frames": "24",
                    "hash": "4c6efbe36f743ea0cb91991e735809b1"
                },
                "downsized":
                {
                    "height": "355",
                    "width": "500",
                    "size": "1526270",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=giphy.gif"
                },
                "downsized_large":
                {
                    "height": "355",
                    "width": "500",
                    "size": "1526270",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=giphy.gif"
                },
                "downsized_medium":
                {
                    "height": "355",
                    "width": "500",
                    "size": "1526270",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=giphy.gif"
                },
                "downsized_small":
                {
                    "height": "250",
                    "width": "353",
                    "mp4_size": "44523",
                    "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy-downsized-small.mp4?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=giphy-downsized-small.mp4"
                },
                "downsized_still":
                {
                    "height": "355",
                    "width": "500",
                    "size": "1526270",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy_s.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=giphy_s.gif"
                },
                "fixed_height":
                {
                    "height": "200",
                    "width": "282",
                    "size": "355044",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=200.gif",
                    "mp4_size": "66755",
                    "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200.mp4?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=200.mp4",
                    "webp_size": "134942",
                    "webp": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200.webp?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=200.webp"
                },
                "fixed_height_downsampled":
                {
                    "height": "200",
                    "width": "282",
                    "size": "100877",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200_d.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=200_d.gif",
                    "webp_size": "58208",
                    "webp": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200_d.webp?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=200_d.webp"
                },
                "fixed_height_small":
                {
                    "height": "100",
                    "width": "141",
                    "size": "124582",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/100.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=100.gif",
                    "mp4_size": "24274",
                    "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/100.mp4?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=100.mp4",
                    "webp_size": "59762",
                    "webp": "https://media4.giphy.com/media/xFBnkMvpTM6m4/100.webp?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=100.webp"
                },
                "fixed_height_small_still":
                {
                    "height": "100",
                    "width": "141",
                    "size": "5982",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/100_s.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=100_s.gif"
                },
                "fixed_height_still":
                {
                    "height": "200",
                    "width": "282",
                    "size": "15487",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200_s.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=200_s.gif"
                },
                "fixed_width":
                {
                    "height": "142",
                    "width": "200",
                    "size": "313910",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200w.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=200w.gif",
                    "mp4_size": "39698",
                    "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200w.mp4?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=200w.mp4",
                    "webp_size": "89630",
                    "webp": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200w.webp?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=200w.webp"
                },
                "fixed_width_downsampled":
                {
                    "height": "142",
                    "width": "200",
                    "size": "78784",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200w_d.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=200w_d.gif",
                    "webp_size": "34188",
                    "webp": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200w_d.webp?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=200w_d.webp"
                },
                "fixed_width_small":
                {
                    "height": "71",
                    "width": "100",
                    "size": "78389",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/100w.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=100w.gif",
                    "mp4_size": "16225",
                    "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/100w.mp4?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=100w.mp4",
                    "webp_size": "39370",
                    "webp": "https://media4.giphy.com/media/xFBnkMvpTM6m4/100w.webp?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=100w.webp"
                },
                "fixed_width_small_still":
                {
                    "height": "71",
                    "width": "100",
                    "size": "4033",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/100w_s.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=100w_s.gif"
                },
                "fixed_width_still":
                {
                    "height": "142",
                    "width": "200",
                    "size": "13252",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200w_s.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=200w_s.gif"
                },
                "looping":
                {
                    "mp4_size": "1134102",
                    "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy-loop.mp4?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=giphy-loop.mp4"
                },
                "original_still":
                {
                    "height": "355",
                    "width": "500",
                    "size": "89885",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy_s.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=giphy_s.gif"
                },
                "original_mp4":
                {
                    "height": "340",
                    "width": "480",
                    "mp4_size": "275163",
                    "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy.mp4?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=giphy.mp4"
                },
                "preview":
                {
                    "height": "266",
                    "width": "375",
                    "mp4_size": "30699",
                    "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy-preview.mp4?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=giphy-preview.mp4"
                },
                "preview_gif":
                {
                    "height": "60",
                    "width": "85",
                    "size": "49815",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy-preview.gif?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=giphy-preview.gif"
                },
                "preview_webp":
                {
                    "height": "156",
                    "width": "220",
                    "size": "41786",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy-preview.webp?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=giphy-preview.webp"
                },
                "480w_still":
                {
                    "height": "341",
                    "width": "480",
                    "size": "1526270",
                    "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/480w_s.jpg?cid=c2e99c3e4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&rid=480w_s.jpg"
                }
            },
            "analytics_response_payload": "e=Z2lmX2lkPXhGQm5rTXZwVE02bTQmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1jMmU5OWMzZTRhcXphdWhsN3oyazlwbno0dGlqN2VocmRjZWc2YXMzcjBiY3FqYTI",
            "analytics":
            {
                "onload":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&event_type=GIF_SEARCH&gif_id=xFBnkMvpTM6m4&action_type=SEEN"
                },
                "onclick":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&event_type=GIF_SEARCH&gif_id=xFBnkMvpTM6m4&action_type=CLICK"
                },
                "onsent":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2&event_type=GIF_SEARCH&gif_id=xFBnkMvpTM6m4&action_type=SENT"
                }
            }
        }
    ],
    "pagination":
    {
        "total_count": 568,
        "count": 1,
        "offset": 0
    },
    "meta":
    {
        "status": 200,
        "msg": "OK",
        "response_id": "4aqzauhl7z2k9pnz4tij7ehrdceg6as3r0bcqja2"
    }
 }
var gifURL = giphy.data[0].embed_url;
// variable to put in response
function rendergif() {
    $("iframe#heroGif").attr("src", gifURL);
    console.log(gifURL);
};

init();