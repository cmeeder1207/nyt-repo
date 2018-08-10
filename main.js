// GLOBAL VARIABLES
// --------------------



// FUNCIONS
// --------------------

function getArticles(search, begin, end, num) {
    var searchTerm = search;
    var numRecords = num;
    var begin_date = begin;
    var end_date = end;


    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
    'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
    'q': searchTerm,
    'begin_date': begin_date,
    'end_date': end_date,
    });

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(r) {

      for (var i = 0; i < numRecords; i++) {
      console.log(r.response.docs[i].headline.main);
      // console.log(r.response.docs[i].pub_date);
      // console.log(r.response.docs[i].snippet);
      // console.log(r.response.docs[i].web_url);
      };


    });

// CALLS
// --------------------
// $('submit').on click...
    // call getArticles()



// NOTES
// --------------------