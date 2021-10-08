function doSum() {
    var num1 =  document.getElementById("firstnumber").value;
    var num2 = document.getElementById("secondnumber").value;
    
    var sum = Number(num1) + Number(num2);
    
    var result = document.getElementById("result").innerText = sum;
}
