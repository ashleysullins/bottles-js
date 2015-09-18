var countDown = function(number) {
  var numberList = [];
  for (var i = 1; i <= number; i++) {
    numberList.unshift(i);
  }
  return numberList;
}

$(document).ready(function() {
  $("#result").hide();

  $("form#ciders").submit(function(event) {
    $(".song").empty();
    $(".finalLine").empty();
    $(".oneLiner").empty();
    
    var number = parseInt($("input#number").val());
    var numArray = countDown(number);
    var index = 0;
  
    numArray.forEach(function(entry) {
      $(".song").append("<br> " + entry + " bottles of cider on the wall, " + entry + " bottles of cider. Take one down and pass it around, " + (entry - 1) + " bottles of cider on the wall. " );
      index++;
    });
    
    $(".finalLine").append("<br> No more bottles of cider on the wall, no more bottles of cider. Go to the store and buy some more, " + number +  " bottles of cider on the wall!");
    
    $("#result").show();
    event.preventDefault();
  });
});