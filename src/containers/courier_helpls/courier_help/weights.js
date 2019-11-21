var x=0
function w1() {
    x=1;
}
function w2() {
    x=2;
}
function w3() {
    x=3
}
function weight() {
    document.getElementById("weight_1").classList.remove("block");
    document.getElementById("weight_2").classList.remove("block");
    document.getElementById("weight_3").classList.remove("block");
    if (x==1) {
        document.getElementById("W1").classList.add("block");
    } else if(x==2){
        document.getElementById("W2").classList.add("block");
    }else if (x==3) {
        document.getElementById("W3").classList.add("block");
    }
}