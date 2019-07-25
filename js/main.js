time();
function time(){
    const now = new Date();
    document.getElementById("time").innerHTML = now.toLocaleTimeString();
}
setInterval('time()',1000);
