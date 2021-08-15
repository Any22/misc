// fetching the data 
const dbutton= document.getElementById('resbtn');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const getdata= async () => {
const response = await fetch('./response.json');
const data= await response.json();
let items =data;
console.log(items);
const newConfirm = data.Global.All.confirmed;
const newDeaths = data.Global.All.deaths;
const newRecovered = data.Global.All.recovered;
const speed=200;

const counter= () =>{
const target=newConfirm;
const target1=newDeaths;
const target2=newRecovered;

const count= document.getElementById("confirmedCasesFigure").innerText;
const count1= document.getElementById("newDeathsFigure").innerText;
const count2=document.getElementById('newRecoveredFigure').innerText;

const inc =target/speed;
const inc1=target1/speed;
const inc2=target2/speed; 

 
   if (count < target){
    document.getElementById('confirmedCasesFigure').innerText=parseInt(count+inc);
    document.getElementById('newDeathsFigure').innerText=parseInt(count1+inc1); 
    document.getElementById('newRecoveredFigure').innerText=parseInt(count2+inc2);
    setTimeout(counter,300);
   }else {
    document.getElementById('confirmedCasesFigure').innerText=target; 
    document.getElementById('newDeathsFigure').innerText=target1;
    document.getElementById('newRecoveredFigure').innerHTML=target2;
    
    }
};
counter();

// const getOzData = () => {
const newConfirmedAustralia= data.Australia.All.confirmed;
const newDeathsAustralia = data.Australia.All.deaths;
const newRecoveredAustralia = data.Australia.All.recovered;
const data1=data["Australia"]["Australian Capital Territory"]["recovered"];
const data2=data["Australia"]["New South Wales"]["recovered"];
const data3=data["Australia"]["Northern Territory"]["recovered"];
const data4=data.Australia.Queensland.recovered;
const data5=data["Australia"]["South Australia"]["recovered"];
const data6=data.Australia.Tasmania.recovered;
const data7=data.Australia.Victoria.recovered;
const data8=data["Australia"]["Western Australia"]["recovered"];
const deathData=data["Australia"]["Australian Capital Territory"]["deaths"];
const deathData1=data["Australia"]["New South Wales"]["deaths"];
const deathData2=data["Australia"]["Northern Territory"]["deaths"];
const deathData3=data.Australia.Queensland.deaths;
const deathData4=data["Australia"]["South Australia"]["deaths"];
const deathData5=data.Australia.Tasmania.deaths;
const deathData6=data.Australia.Victoria.deaths;
const deathData7=data["Australia"]["Western Australia"]["deaths"];

const ozStateSelect=document.querySelector(".state-select");
  
 document.getElementById('oZResponse').innerHTML=newConfirmedAustralia;
 document.getElementById('oZResponse1').innerHTML=newDeathsAustralia;
 document.getElementById('oZResponse2').innerHTML=newRecoveredAustralia;      
 ozStateSelect.addEventListener("change", (event)=>
 {
  const states= document.getElementById("states").value  ;
  const stateName=event.target.value;

  document.getElementById("state-name").innerHTML = stateName;

   if (states === event.target.value)
   {
     //bracket notation is used to access the key name with space
     document.getElementById("confirmedFigure").innerHTML = data["Australia"][stateName]["confirmed"];
     document.getElementById("deaths").innerHTML =data["Australia"][stateName]["deaths"];
     document.getElementById("recoveredFigure").innerHTML =data["Australia"][stateName]["recovered"];

   }
   
   else 
    console.log("not avaialble");
 }); 
 
 let xValues = ["Australian Capital Territory", "New South Wales", "Northern Territory", "Queensland", "South Australia","Tasmania","Victoria","Western Australia"];
let xValues1 = ["ACT", "NSW", "NT", "QLD", "SA","TAS","VIC","WA"];
let yValues = [data1, data2, data3, data4, data5,data6,data7,data8];
let yValues1 = [deathData, deathData1,deathData2, deathData3, deathData4,deathData5,deathData6,deathData7];
let barColors = ["#36C5F0","#36C5F0","#36C5F0","#36C5F0","#36C5F0","#36C5F0","#36C5F0","#36C5F0","#f4c20"];
let barColors1 = ["red","#0F52BA","#E79AFF"," #f4c20d","#fb7e84","red","skyblue","#8ab48a","#fb7e84"];
 console.log(data1);
 
new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues1,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display:false},
    title: {
      display: true,
      text: "Total recoverd cases",
      fontSize:15,
      fontColor: "white",
    
    }
  }
});

new Chart("myChart1", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors1,
      data: yValues1
    }]
  },
  options: {
    title: {
      display: true,
      text: "Total deaths",
      fontSize:20,
      fontColor: "white",
    }
  }
});

}

getdata();

const bounce= () => {
$(".newRecovered").addClass("animated bounce");
$(".newRecoveredOz").addClass("animated bounce");
$(".totalRecovered").addClass("animated bounce");
$(".oZResponse").addClass("animated bounce");
$(".oZResponse1").addClass("animated bounce");
$(".oZResponse2").addClass("animated bounce");
}
setTimeout(bounce,1000);

