function insert(val) {
    var valor = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = valor + val 
}

function del() {
    var valor = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = valor.substring(0, valor.length - 1)
}

function AllDel() {
    document.getElementById('resultado').innerHTML = ''
}

function calcular() {
    var valor = document.getElementById('resultado').innerHTML
    if(valor) {
        document.getElementById('resultado').innerHTML = eval(valor)
    }
    else {
        document.getElementById('resultado').innerHTML = 'Error'
    }
}