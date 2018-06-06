function countLetters(string) {
    //unsure about question. if it is talking about the string index with spaces included use originalString, otherwise use string
    var originalString = string;
    //create an empty object
    var countLettersObject = {};
    //strip the spaces in in the string
    string = string.replace(/\s+/g, "");

    //Steps to: create the object keys with value 0
    //remove duplicate letters
    string = string.split("");
    var uniqueString = [];
    for (var i = 0; i < string.length; i++) {
        if (uniqueString.indexOf(string[i]) == -1) {
            uniqueString.push(string[i]);
        }
    }
    //put each letter as a key in countLettersObject with value []
    for (var i = 0; i < uniqueString.length; i++) {
        countLettersObject[uniqueString[i]] = [];
    }
    //find the index of each letter and add it to an array
    for (var i = 0; i < string.length; i++) {
        countLettersObject[string[i]].push(i);
    }

    return countLettersObject;
}

console.log(countLetters("lighthouse in the house"));
