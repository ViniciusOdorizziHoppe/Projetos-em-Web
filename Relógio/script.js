function atualizar() {


var res = document.getElementById('hr') 

var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()


res.innerHTML = `${hora}:${minutos}:${segundos}`



}

setInterval(atualizar,1000)