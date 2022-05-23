var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://restcountries.com/v3.1/region/europe",
    "method": "GET"
  }

  $.ajax(settings).done(function (country) {
    console.log(country.capital);

    var content = country.capital;
    $("#capital").append(content);
  });
