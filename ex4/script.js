var options = [
    {id:'tokbokki', name: 'Lẩu Tokbokki', quanity: 0, price: 20000},
    {id:'cow-hotpot', name: 'Lẩu Bò Hàn Quốc', quanity: 0, price: 20000},
    {id:'special-cow-hotpot', name: 'Lẩu Bò Đặc Biệt', quanity: 0, price: 20000},
    {id:'met-ta-la', name: 'Mẹt Tá Lả', quanity: 0, price: 20000},
    {id:'fish-cow-shrimp', name: 'Cá/Bò/Tôm', quanity: 0, price: 20000},
    {id:'fried-potato', name: 'Khoai Tây Chiên', quanity: 0, price: 20000},
    {id:'rainbow-kimbap', name: 'Kimbap Cầu Vòng', quanity: 0, price: 20000},
    {id:'fried-kimbap', name: 'Kimbap Chiên', quanity: 0, price: 20000},
    {id:'fish-ball', name: 'Cá Viên Lác Phô Mai', quanity: 0, price: 20000},
    {id:'water', name: 'Nước Suối', quanity: 0, price: 20000},
    {id:'coca', name: 'Coca Cola', quanity: 0, price: 20000},
    {id:'sting', name: 'Sting', quanity: 0, price: 20000},
];
var sum=0;
function myfunctions(type) {
    options.forEach(element => {
        if (element.id == type){
            if (element.quanity == 0){
                element.quanity++;
                sum += element.price;
                document.getElementById('bill').innerHTML += "<tr> <td>"+element.name+"</td> <td>"+element.quanity+"</td> <td>"+element.price+"đ</td> <td>"+element.quanity*element.price+"đ</td> </tr>";
            } else{
                element.quanity++;
                sum += element.price;
                document.getElementById('bill').innerHTML = '<tr> <th>Tên Món</th> <th>Số Lượng</th> <th>Đơn Giá</th> <th>Thành Tiền</th> </tr>';
                options.forEach(element => {
                    if (element.quanity != 0) {
                    document.getElementById('bill').innerHTML += "<tr> <td>"+element.name+"</td> <td>"+element.quanity+"</td> <td>"+element.price+"đ</td> <td>"+element.quanity*element.price+"đ</td> </tr>";
                    }
                });
            }
        }
        document.getElementById('sum').innerHTML = sum + "đ";
    });
}
function reset(){
    options.forEach(element => {
        element.quanity = 0;
    });
    document.getElementById('bill').innerHTML = '<tr> <th>Tên Món</th> <th>Số Lượng</th> <th>Đơn Giá</th> <th>Thành Tiền</th> </tr>';
     sum = 0;
     document.getElementById('sum').innerHTML = sum;
}