function check(){
    var a = document.getElementById("number").value;
    if (a > 0 ){
        document.getElementById("result").innerHTML = "Số đó là số dương";
        document.getElementById("result").style.color = "#CBB279";
    }
    else if (a < 0){
        document.getElementById("result").innerHTML = "Số đó là số âm";
        document.getElementById("result").style.color = "#537188";
    }
    else if(a==0){ 
            document.getElementById("result").innerHTML = "Số đó là số 0";
            document.getElementById("result").style.color = "#884A39";
    }
}