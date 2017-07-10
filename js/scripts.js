$(document).ready(function() {
  $("#favorites").submit(function(event) {
    var colorInput = $("input#color").val();
    var foodInput = $("input#food").val();
    var placeInput = $("input#place").val();
    var inputs = [colorInput, foodInput, placeInput];
    var newInputs = [];
    newInputs.push(inputs[0], inputs[1], inputs[2]);
    $(".inputs").text(inputs);
    $("#inputResults").show();
    $(".inputs2").text(newInputs);
    $("#newArrayResults").show();
    var item = 0;
    newInputs.forEach(function(newInput){
      $("#item"+item).text(newInput);
      item ++;
      $(".unorderList").show();
    });

    // $("#item1").text(newInputs[0]);
    // $("#item2").text(newInputs[1]);
    // $("#item3").text(newInputs[2]);

    // document.write(
    //   "<ul>"
    //   + "<li>" + newInputs[0] + "</li>"
    //   + "<li>" + newInputs[1] + "</li>"
    //   + "<li>" + newInputs[2] + "</li>"
    //   + "</ul>"
    // );
    event.preventDefault();
 });
});
