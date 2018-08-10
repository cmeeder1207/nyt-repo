// GLOBAL VARIABLES
// --------------------


// FUNCIONS
// --------------------

function getArticles(search, begin, end, num) {

    console.log(search, begin, end, num);


    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
    'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
    'q': search,
    'begin_date': begin,
    'end_date': end,
    });

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(r) {

      for (var i = 0; i < num; i++) {
      console.log(r.response.docs[i].headline.main);
      // console.log(r.response.docs[i].pub_date);
      // console.log(r.response.docs[i].snippet);
      // console.log(r.response.docs[i].web_url);
      };

    });
};

// CALLS
// --------------------
// $('submit').on click...
    // call getArticles()

$(':submit').on('click', function(event) {
    event.preventDefault();
    var search = $('#searchTerm').val();
    var begin = $('#startYear').val();
    var end = $('#endYear').val();
    var num = $('#numberOfRecords').val();
    getArticles(search, begin, end, num);
})



// NOTES
// --------------------