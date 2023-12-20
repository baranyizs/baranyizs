function generateRandomString() {
        var randomString = Math.random().toString(36).substring(2);
        return randomstring.sort(function () { return 0.5 - Math.random(); }).slice(0, 3);
    }
function generateRandomStrings() {
        var strings = [];
        for (var i = 1; i < 7; i++) {
            strings.push(document.getElementById("inputString" + i).value);
        }

        var output = [];
        for (var i = 0; i < 3; i++) {
            var randomIndex = Math.floor(Math.random() * strings.length);
            output.push(strings[randomIndex]);
            strings.splice(randomIndex, 1);
        }
        output = output.sort(function () { return 0.5 - Math.random(); }).slice(0, 3);
        document.getElementById("outputString1").value = output[0];
        document.getElementById("outputString2").value  = output[1];
        document.getElementById("outputString3").value  = output[2]; 
    }
