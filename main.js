//callback function.

function getData(cb) { //takes cb as the argument, the function that we pass in
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText)); // cb is passed as the data argument, that's going to actually run the function that we pass in as a callback.
        }
    };
}

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);