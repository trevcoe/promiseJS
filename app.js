let favNumber = 7;
let baseURL = "http://numbersapi.com";

$.getJSON(`${baseURL}/${favNumber}?json`, function(data){
    console.log(data);
});

let favNumbers = [7,12,21];
$.getJSON(`${baseURL}/${favNumbers}?json`, function(data){
    console.log(data);
});

let facts = [];
$.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
    facts.push(data.text);
    $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
      facts.push(data.text);
      $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
        facts.push(data.text);
        $.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
          facts.push(data.text);
          facts.forEach(fact => {
            $("body").append(`<p>${fact}</p>`);
          });
        });
      });
    });
  });
  