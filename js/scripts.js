$(document).ready(function() {
  $("#game form").submit(function(event) {

    event.preventDefault();

    inputSentence = $("input#random-sentence").val();

    var arraySentence = inputSentence.split("");

    var vowels = ["a", "e", "i", "o", "u"];

    // Using two loops and replacing letters in the original array.

    for (var i = 0; i < arraySentence.length; i++) {
      for (var j = 0; j < vowels.length; j++) {
          if (arraySentence[i] === vowels[j]){
          arraySentence[i] = "-"
        }
      };
    };

    // Using only one loop and indexOf():

    // for (var i = 0; i < arraySentence.length; i++) {
    //       if (vowels.indexOf(arraySentence[i]) == -1){
    //       newSentence.push(inputSentence[i]);
    //     } else {
    //       newSentence.push("-");
    //     }
    // };

    // Using one loop and branching:

    // for (var i = 0; i < inputSentence.length; i++) {
    //   if (inputSentence[i] === "a" || inputSentence[i] === "e" || inputSentence[i] === "i" || inputSentence[i] === "o" || inputSentence[i] === "u" ) {
    //     newSentence.push("-");
    //   } else {
    //     newSentence.push(inputSentence[i]);
    //   }
    // }

    var final = arraySentence.join(" ")

    $("#transformed-sentence").text(final);

    $(".display-transformed-sentence").show();
    $(".input-sentence").hide();
  });

  $("#solve form").submit(function(event) {

    event.preventDefault();

    $(".display-solution").show();
    $("#original-sentence").text(inputSentence);



  });
});
