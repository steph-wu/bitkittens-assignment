$(document).ready(function(){

  $('.summon-cats').on('click', function() {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(responseData) {
      var cats = responseData.cats;
      $('#cat1').html(
        '<img src="' + cats[0].photo + '" alt="Photo of ' + cats[0].name + '">');
      $('#cat2').html(
        '<img src="' + cats[1].photo + '" alt="Photo of ' + cats[1].name + '">');
      $('#cat3').html(
        '<img src="' + cats[2].photo + '" alt="Photo of ' + cats[2].name + '">');
    }).always(function() {
      console.log('Ajax request sent!');
    });
  });

});
