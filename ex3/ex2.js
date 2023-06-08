function check(){
  var score = document.getElementById('score').value;
  if(score>=9){
    document.getElementById('result').innerHTML = "Bạn là học sinh Xuất Sắc!";
    document.getElementById('result').style.color = "#606C5D"
  } else if(score>=8){
    document.getElementById('result').innerHTML = "Bạn là học sinh Giỏi!";
    document.getElementById('result').style.color = "#FFF4F4"
  } else if(score>=7){
    document.getElementById('result').innerHTML = "Bạn là học sinh Khá!"; 
    document.getElementById('result').style.color = "#F7E6C4" 
  } else if(score>=5){
    document.getElementById('result').innerHTML = "Bạn là học sinh Trung Bình!";
    document.getElementById('result').style.color = "#F1C376"
  } 
  else if(score>=3){
    document.getElementById('result').innerHTML = "Bạn là học sinh Yếu!";
    document.getElementById('result').style.color = "#FFF4F4"
  }
  else if(score>=0){
    document.getElementById('result').innerHTML = "Chúc bạn may mắn lần sau!";
    document.getElementById('result').style.color = "#FFF4F4"
    }
}