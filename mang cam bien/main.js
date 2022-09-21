function doimau1() {
    const x = document.getElementById("box1").value
    if (x<=20) {
        col1.style.background='blue'
    }else if(x<=30){
        col1.style.background='violet'
    }else{
        col1.style.background='red'
        alert('Bật bơm tưới nước cho cây đi!!!!')
    }
}
 function doimau2(){
     document.getElementById("nut1").style.background = 'red'
    
 }
 function doimau3(){
     document.getElementById("nut1").style.background ='blue'
 }
 function resetMyForm(){
    document.getElementById("nut2").style.background ='green'
 }