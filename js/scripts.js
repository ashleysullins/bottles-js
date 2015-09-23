var ciders = function(number) {
  var song = "";
  for (var i = number; i >= 0; i--) {
    if (i === 0) {
       song += "<br> No more bottles of cider on the wall, no more bottles of cider. Go to the store and buy some more, " + number + " bottles of cider on the wall.";
    }
    else if (i === 1) {
       song += "<br>" + i + " more bottle of cider on the wall, " + i + " more bottle of cider. Take one down and pass it around, " + (i - 1) + " bottles of cider on the wall.";
    }
    else if (i === 2) {
       song += "<br>" + i + " more bottles of cider on the wall, " + i + " more bottles of cider. Take one down and pass it around, " + (i - 1) + " bottle of cider on the wall.";
    }
    else if (i > 2) {
       song += "<br>" + i + " more bottles of cider on the wall, " + i + " more bottles of cider. Take one down and pass it around, " + (i - 1) + " bottles of cider on the wall."
    }
  }
  return song;
}

$(document).ready(function() {
  $("#result").hide();

  $("form#ciders").submit(function(event) {
    $(".song").empty();
    $(".finalLine").empty();
    $(".oneLiner").empty();
    
    var number = parseInt($("input#number").val());
    var numArray = ciders(number);
    var index = 0;
  
    $(".song").html(numArray);
    
    $("#result").show();
    event.preventDefault();
  });
});