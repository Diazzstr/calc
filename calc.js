
function insert(num) {
    document.enter.textview.value = document.enter.textview.value + num;
}

function equal() {
    const exp = document.enter.textview.value;
    if(exp){
        document.enter.textview.value = eval(exp);
    }
}

function clean() {
    document.enter.textview.value = "";
}

function back() {
    const exp = document.enter.textview.value;
    document.enter.textview.value = exp.substring(0, exp.length - 1);
}