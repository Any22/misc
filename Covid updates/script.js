// fetching the data 
const dbutton= document.getElementById('resbtn');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const getdata= async () => {
const response = await fetch('https://api.covid19api.com/summary');
const data= await response.json();
let items =data;
const newConfirm = data.Global.NewConfirmed;
const newDeaths = data.Global.NewDeaths;
const newRecovered = data.Global.NewRecovered;
const TotalConfirmed= data.Global.TotalConfirmed;
const TotalDeaths = data.Global.TotalDeaths;
const TotalRecovered=data.Global.TotalRecovered;
const speed=200;

const counter= () =>{
const target=newConfirm;
const target1=newDeaths;
const target2=newRecovered;
const target3=TotalConfirmed;
const target4=TotalDeaths;
const target5=TotalRecovered;
const count= document.getElementById("confirmedCasesFigure").innerText;
const count1= document.getElementById("newDeathsFigure").innerText;
const count2=document.getElementById('newRecoveredFigure').innerText;
const count3=document.getElementById('totalConfirmedFigure').innerText;
const count4=document.getElementById('tdeaths').innerText;
const count5=document.getElementById('totalRecoveredFigure').innerText;
const inc =target/speed;
const inc1=target1/speed;
const inc2=target2/speed; 
const inc3=target3/speed;
const inc4=target4/speed;
const inc5=target5/speed;
 
   if (count < target){
    document.getElementById('confirmedCasesFigure').innerText=parseInt(count+inc);
    document.getElementById('newDeathsFigure').innerText=parseInt(count1+inc1); 
    document.getElementById('newRecoveredFigure').innerText=parseInt(count2+inc2);
    document.getElementById('totalConfirmedFigure').innerText=parseInt(count3+inc3);
    document.getElementById('tdeaths').innerText=parseInt(count4+inc4);
    document.getElementById('totalRecoveredFigure').innerText=parseInt(count5+inc5);

    setTimeout(counter,300);
   }else {
    document.getElementById('confirmedCasesFigure').innerText=target; 
    document.getElementById('newDeathsFigure').innerText=target1;
    document.getElementById('newRecoveredFigure').innerHTML=target2;
    document.getElementById('totalConfirmedFigure').innerText=target3
    document.getElementById('tdeaths').innerText=target4
    document.getElementById('totalRecoveredFigure').innerText=target5

    }
};
counter();

// Filtering Australian cases  from the global data 
const getOzData = () =>{
  let newArray = (items.Countries.filter(opt => opt.Country === 'Australia'));
  const newConfirmedAustralia= newArray[0].NewConfirmed;
  const newDeathsAustralia = newArray[0].NewDeaths;
  const newRecoveredAustralia = newArray[0].NewRecovered;
 document.getElementById('oZResponse').innerHTML=newConfirmedAustralia;
 document.getElementById('oZResponse1').innerHTML=newDeathsAustralia;
 document.getElementById('oZResponse2').innerHTML=newRecoveredAustralia;      
}
getOzData();
};

getdata();


const bounce= () => {
$(".newRecovered").addClass("animated bounce");
$(".newRecoveredOz").addClass("animated bounce");
$(".totalRecovered").addClass("animated bounce");
}
setTimeout(bounce,1000);