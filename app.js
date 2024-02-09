var a = document.getElementById('stratDate');
var b = "13 Feb 2024 ";
a.innerText = b;
var inputs = document.getElementsByTagName('input');

function abc(){
    var startDate = new Date(b);
    var curentDate = new Date();
    var diff = (startDate - curentDate)/1000;
    if(diff < 0) return;

    inputs[0].value = Math.floor(diff/86400);
    inputs[1].value = Math.floor((diff%86400)/3600);
    inputs[2].value = Math.floor((diff%3600)/60);
    inputs[3].value = Math.floor(diff%60);
}

setInterval(abc,1000);

