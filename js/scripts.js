
var countDown = function(number) {
  var numberList = [];
  for (var i = 1; i <= number; i++) {
    numberList.unshift(i);
  }
  return numberList;
}

// var countDownMinus = function(numberList) {
//   var minusOneList = numberList.unshift([0]);
//   }
//   return minusOneList;
// }

//
//
// $(document).ready(function() {
//   $("form#factorial").submit(function(event) {
//     var number= parseInt($("input#number").val());
//     var result = factorial(number);
//
//       $(".number").text(number)
//       $(".final").text(result)
//        $("#result").show()
//
//
//     event.preventDefault();
//   });
// });
