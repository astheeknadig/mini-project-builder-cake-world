var flav = {
    'Chocolate': 300,
    'Strawberry': 100,
    'Butterscotch': 200,
    'Vannila': 250,
    'Redvelvet': 350
}

var clr = {
    'Chocolate': "#7B3F00",
    'Strawberry': "#FC5A8D",
    'Butterscotch': "#E3963E",
    'Vannila': "#F3E5AB",
    'Redvelvet': "#7F2A3C"
}

var l = [];
var res = 0;
var c = 0

function flavour(f) {
    var ele = document.getElementById(f);
    if (!l.includes(f)){
        l.push(f)
        res += flav[f]
        document.getElementById("layer"+(c+1)).style.visibility = "visible";
        document.getElementById("layer"+(c+1)).style.backgroundColor = clr[f];
        c++;

        document.getElementById(f+'_b').style.visibility = "visible";
        }

        if (c==5){
            var can = document.getElementById("candles");
            can.style.visibility = "visible";
            }
    }


function buy() {
    document.getElementById('total').style.visibility = "visible";
    document.getElementById("total").innerHTML += (' ' + res); 

}
