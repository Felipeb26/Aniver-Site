var loadFile = function(event) {
    var output = document.getElementById('imgPrev');
    output.src = URL.createObjectURL(event.target.files[0]);
}
