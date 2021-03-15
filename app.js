function setVal(val) {
    var type = document.getElementById("set_input");
    type.value += val
}

function calc(){
    var type = document.getElementById("set_input");
    type.value = eval(type.value)
}

function ClearAll(){
    var type = document.getElementById("set_input");
    type.value = "";
}

function square(){
    var type = document.getElementById("set_input");
    type.value = type.value*type.value
}

function underRoot(){
    var type = document.getElementById("set_input");
    type.value = Math.sqrt(type.value)
}



