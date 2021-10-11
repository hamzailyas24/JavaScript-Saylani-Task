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

function jacket() {
    let weather = document.getElementById("weather").value;

    
    if(weather >= 25 ){

        let weatherpara = document.getElementById("weatherpara").innerText = "Dont carry jacket"
    
    }

    else if(weather <= 15){

        let weatherpara = document.getElementById("weatherpara").innerText = "carry coat"
    
    }

    else if(weather <= 0){

        let weatherpara = document.getElementById("weatherpara").innerText = "Dont Go Out"
    
    }

    else if(weather < 25){

        let weatherpara = document.getElementById("weatherpara").innerText = "carry jacket"
    
    }

}

function checkgrade() {

let per = document.getElementById("gradeinput").value;

if (per >= 80 && per <= 100) {
    let gradepara = document.getElementById("gradepara").innerText = "A-One Grade"; 
}
else if (per >= 70 && per < 80) {
    let gradepara = document.getElementById("gradepara").innerText = "A Grade";
}
else if (per >= 60 && per < 70) {
    let gradepara = document.getElementById("gradepara").innerText = "B Grade";
}
else if (per <= 60 && per>=50) {
    let gradepara = document.getElementById("gradepara").innerText = "C Grade";
}
else if (per < 50 && per >= 40) {
    let gradepara = document.getElementById("gradepara").innerText = "D Grade";
}
else if (per < 40) {
    let gradepara = document.getElementById("gradepara").innerText = "You're Fail Sorry";
}
else {
    alert ("Invalid number");
}

}