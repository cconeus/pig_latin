var count = 0;
debugger;
var pigLatin = function(word, count) {
    var wordArray = word.split(" ");
    var index = wordArray.length;
console.log(count);
    if (index===1) {
        var output = transform(word);
    } else if (count<index){
        var output = transform(wordArray[count]) + ' ' + pigLatin(word, count+1);
    }
    return output;
};

var transform = function(word) {
    var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','x','y','z'];
    if (word.charAt(0) === ("a"||"e"||"i"||"o"||"u")) {
        var output = word + "-ay";
        return output;
    } else if (($.inArray((word.charAt(0)),consonants)>-1)&&($.inArray((word.charAt(1)),consonants)>-1)&&($.inArray((word.charAt(2)),consonants)>-1)){
        var firstthreeletters = word.charAt(0) + word.charAt(1) + word.charAt(2);
        var latin = word.slice(3);
        var output = latin + "-" + firstthreeletters + "ay";
        return output;
    } else if (($.inArray((word.charAt(0)),consonants)>-1)&&($.inArray((word.charAt(1)),consonants)>-1)){
        var firsttwoletters = word.charAt(0) + word.charAt(1);
        var latin = word.slice(2);
        var output = latin + "-" + firsttwoletters + "ay";
        return output;
    } else if (word.charAt(0)==="q"&&word.charAt(1)==="u"){
        var latin = word.slice(2);
        var output = latin + "-" + "quay";
        return output;
    } else {
        var firstletter = word.charAt(0);
        var latin = word.slice(1);
        var output = latin + "-" + firstletter + "ay";
        return output;
    }
};

$(document).ready(function() {
    $("form#piglatin").submit(function(event){
        var word = $("input#word").val();
        var result = pigLatin(word);

        $(".output").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
