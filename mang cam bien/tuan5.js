 function on() {
    var a = confirm('bật') 
    if(a==true){
    document.getElementById("myImage").src= "bongdensang.jpg"
    document.getElementById("nut1").style.background = '#9966FF'
}
 }
 function off() {
  var a = confirm('tắt') 
    if(a==true){
     document.getElementById("myImage").src= "bongden.jpg"
     document.getElementById("nut1").style.background ='#CCCCFF'
 }
}
const Node = document.querySelectorAll('p');

const nds=[0,0,0,0,0,0,0,0,0,0,0,0]
const das=[0,0,0,0,0,0,0,0,0,0,0,0]
const ass=[0,0,0,0,0,0,0,0,0,0,0,0]

setInterval(function(){

let nd1= Math.floor(Math.random()*100);
let da1= Math.floor(Math.random()*100);
let as1= Math.floor(Math.random()*100);

function random(){
  nds.push(nd1); nds.shift();
  das.push(da1); das.shift();
  ass.push(as1); ass.shift();

  console.log(nds);
  console.log(das);
  console.log(ass);
}
  random();

function doimau1() {
    if (nd1<20) {
      document.getElementById("col1").style.background = '#FFCCCC'
    }else if(nd1<30){
      document.getElementById("col1").style.background = '#FF6666'
    }else{
      document.getElementById("col1").style.background = '#FF0000'
        
    }
}
    function doimau2() {
      if (da1<30) {
        document.getElementById("col2").style.background ='#FFFFCC'
    }else if(da1<60){
      document.getElementById("col2").style.background ='#FFFF66'
    }else{
       document.getElementById("col2").style.background = '#FFCC00'
      }  
    }
    function doimau3() {
      if (as1<50) {
        document.getElementById("col3").style.background='#00FFFF'
    }else{ 
       document.getElementById("col3").style.background = '#0099FF'
      }   
    }
    doimau1();
    doimau2();
    doimau3();
Highcharts.chart('container', {

    title: {
      text:  'TEMPERATURE DISPLAY CHARTER FROM JANUARY TO DECEMBER'
    },
  
    
  
    yAxis: {
      title: {
        text: ''
      }
    },
  
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] 
      
    },
  
    // legend: {
    //   layout: 'vertical',
    //   align: 'right',
    //   verticalAlign: 'middle'
    // },
  
    // plotOptions: {
    //   series: {
    //     label: {
    //       connectorAllowed: false
    //     },
    //     pointStart: 0
    //   }
    // },
  
    series: [{
      name: 'Nhiệt độ',
      data: nds
    }, {
      name: 'Độ ẩm',
      data: das
    }, {
      name: 'Lượng mưa',
      data: ass
    },],
  
    // responsive: {
    //   rules: [{
    //     condition: {
    //       maxWidth: 500
    //     },
    //     chartOptions: {
    //       legend: {
    //         layout: 'horizontal',
    //         align: 'center',
    //         verticalAlign: 'bottom'
    //       }
    //     }
    //   }]
    // }
  
  });},2000)
  document.getElementById("box1").innerHTML =
  Math.floor(Math.random() * 100)