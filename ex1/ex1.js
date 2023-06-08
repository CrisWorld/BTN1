function check(){
    var a= document.getElementById("a").value;
    var b= document.getElementById("b").value;
    var result = -(b)/a;
    if(a!=0 && b!=0){
        document.getElementById("result").innerHTML=result;
    } else if (a==0 && b==0) {
        document.getElementById("result").innerHTML="Vô số nghiệm";
        }
        else{
                    document.getElementById("result").innerHTML="Vô nghiệm";
                }
}