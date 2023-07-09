let celsius = document.getElementById("celsius");
let kelvin=document.getElementById("kelvin");
let fahrenheit = document.getElementById("fahrenheit");

function celToFar(){
    let f = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));
    let k=(parseFloat(celsius.value)+273.15);
    kelvin.value=parseFloat(k.toFixed(2));
}
function kelToCel(){
    let c=(parseFloat(kelvin.value)-273.15);
    celsius.value=parseFloat(c.toFixed(2));
    let f=(parseFloat(kelvin.value)-273.15) * 9/5 + 32;
    fahrenheit.value=parseFloat(f.toFixed(2));

}

function farToCel(){
    let c = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat( c.toFixed(2));
    let k = (parseFloat(fahrenheit.value) - 32 * 5 ) / 9 + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));


}