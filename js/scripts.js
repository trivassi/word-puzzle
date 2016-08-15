
$(document).ready(function() {
  $("form").submit(function(event) {

    var inputSentence = $("input#random-sentence").val();

    var stringSentence = inputSentence.split(" ");

    var newSentence = [];

    stringSentence.forEach(function(word){
      if (word.length >= 3){
        newSentence.push(word);
      }
    });

    var reverseSentence = newSentence.reverse();

    var finalSentence = reverseSentence.join(" ");

    alert(finalSentence);

    event.preventDefault();

  });
});
