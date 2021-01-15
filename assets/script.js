// Dropdown Button
$('.dropdown-trigger').dropdown();

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
            "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy.gif?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=giphy.gif",
            "mp4_size": "275163",
            "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy.mp4?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=giphy.mp4",
            "webp_size": "371678",
            "webp": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy.webp?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=giphy.webp",
            "frames": "24",
            "hash": "4c6efbe36f743ea0cb91991e735809b1"
          },
          "downsized":
          {
            "height": "355",
            "width": "500",
            "size": "1526270",
            "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy.gif?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=giphy.gif"
          },
          "downsized_large":
          {
            "height": "355",
            "width": "500",
            "size": "1526270",
            "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy.gif?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=giphy.gif"
          },
          "downsized_medium":
          {
            "height": "355",
            "width": "500",
            "size": "1526270",
            "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy.gif?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=giphy.gif"
          },
          "downsized_small":
          {
            "height": "250",
            "width": "353",
            "mp4_size": "44523",
            "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy-downsized-small.mp4?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=giphy-downsized-small.mp4"
          },
          "downsized_still":
          {
            "height": "355",
            "width": "500",
            "size": "1526270",
            "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy_s.gif?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=giphy_s.gif"
          },
          "fixed_height":
          {
            "height": "200",
            "width": "282",
            "size": "355044",
            "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200.gif?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=200.gif",
            "mp4_size": "66755",
            "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200.mp4?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=200.mp4",
            "webp_size": "134942",
            "webp": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200.webp?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=200.webp"
          },
          "fixed_height_downsampled":
          {
            "height": "200",
            "width": "282",
            "size": "100877",
            "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200_d.gif?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=200_d.gif",
            "webp_size": "58208",
            "webp": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200_d.webp?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=200_d.webp"
          },
          "fixed_height_small":
          {
            "height": "100",
            "width": "141",
            "size": "124582",
            "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/100.gif?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=100.gif",
            "mp4_size": "24274",
            "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/100.mp4?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=100.mp4",
            "webp_size": "59762",
            "webp": "https://media4.giphy.com/media/xFBnkMvpTM6m4/100.webp?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=100.webp"
          },
          "fixed_height_small_still":
          {
            "height": "100",
            "width": "141",
            "size": "5982",
            "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/100_s.gif?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=100_s.gif"
          },
          "fixed_height_still":
          {
            "height": "200",
            "width": "282",
            "size": "15487",
            "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200_s.gif?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=200_s.gif"
          },
          "fixed_width":
          {
            "height": "142",
            "width": "200",
            "size": "313910",
            "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200w.gif?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=200w.gif",
            "mp4_size": "39698",
            "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200w.mp4?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=200w.mp4",
            "webp_size": "89630",
            "webp": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200w.webp?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=200w.webp"
          },
          "fixed_width_downsampled":
          {
            "height": "142",
            "width": "200",
            "size": "78784",
            "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200w_d.gif?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=200w_d.gif",
            "webp_size": "34188",
            "webp": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200w_d.webp?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=200w_d.webp"
          },
          "fixed_width_small":
          {
            "height": "71",
            "width": "100",
            "size": "78389",
            "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/100w.gif?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=100w.gif",
            "mp4_size": "16225",
            "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/100w.mp4?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=100w.mp4",
            "webp_size": "39370",
            "webp": "https://media4.giphy.com/media/xFBnkMvpTM6m4/100w.webp?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=100w.webp"
          },
          "fixed_width_small_still":
          {
            "height": "71",
            "width": "100",
            "size": "4033",
            "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/100w_s.gif?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=100w_s.gif"
          },
          "fixed_width_still":
          {
            "height": "142",
            "width": "200",
            "size": "13252",
            "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/200w_s.gif?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=200w_s.gif"
          },
          "looping":
          {
            "mp4_size": "1134102",
            "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy-loop.mp4?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=giphy-loop.mp4"
          },
          "original_still":
          {
            "height": "355",
            "width": "500",
            "size": "89885",
            "url": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy_s.gif?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=giphy_s.gif"
          },
          "original_mp4":
          {
            "height": "340",
            "width": "480",
            "mp4_size": "275163",
            "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy.mp4?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=giphy.mp4"
          },
          "preview":
          {
            "height": "266",
            "width": "375",
            "mp4_size": "30699",
            "mp4": "https://media4.giphy.com/media/xFBnkMvpTM6m4/giphy-preview.mp4?cid=c2e99c3ehqyxq38sl8eblvhf7fddh16qtw75wqc3f79qb5nh&rid=giphy-preview.mp4"
          },
          "preview_gif":
          {
            "height": "60",
            "width": "85",
          }
        }
      }
}

// variable to put in response
function rendergif() {
  var gifUrl = $("#heroGif").attr("src", giphy.data.embed_url);
  console.log;
};
rendergif();