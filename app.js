// function doSum() {
//     var num1 =  document.getElementById("firstnumber").value;
//     var num2 = document.getElementById("secondnumber").value;
    
//     var sum = Number(num1) + Number(num2);
    
//     var result = document.getElementById("result").innerText = sum;
// }




function convertusd() {
    var pkr = document.getElementById("pkr").value;
    
    let result = Number(pkr) * 170;

    document.getElementById("usdpara").innerHTML = result

}

function convertpkr() {
    var usd = document.getElementById("usd").value;

    let result = Number(usd) / 170;

    document.getElementById("pkrpara").innerHTML = result;

}