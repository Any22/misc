let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
  
}
// controlling the time of slides appearence by calling the fuction to display slides
// setInterval(showSlides,2000);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// fetching the CovidSummary.json file 
const dbutton= document.getElementById('resbtn');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};



const getdata= async () => {
const response = await fetch('./summary.json');
const data= await response.json();
let items =data;
const newConfirm = data.Global.NewConfirmed;
const newDeaths = data.Global.NewDeaths;
const newRecovered = data.Global.NewRecovered;
const TotalConfirmed= data.Global.TotalConfirmed;
const totalDeaths = data.Global.TotalDeaths;
const TotalRecovered=data.Global.TotalRecovered;

document.getElementById('tdeaths').innerHTML=totalDeaths;
document.getElementById('confirmedCasesFigure').innerHTML=newConfirm;
document.getElementById('newDeathsFigure').innerHTML=newDeaths;
document.getElementById('newRecoveredFigure').innerHTML=newRecovered;
document.getElementById('totalConfirmedFigure').innerHTML=TotalConfirmed;
document.getElementById('tdeaths').innerHTML=totalDeaths;
document.getElementById('totalRecoveredFigure').innerHTML=TotalRecovered;

console.log(items); 

const australia= document.getElementById('aus-Btn');
australia.addEventListener('click',getOzData);
function getOzData(){
  let newArray = (items.Countries.filter(opt => opt.Country === 'Australia'));
   const newConfirmedAustralia= newArray[0].NewConfirmed;
   const newDeathsAustralia = newArray[0].NewDeaths;
const newRecoveredAustralia = newArray[0].NewRecovered;
 document.getElementById('oZResponse').innerHTML=newConfirmedAustralia;
   document.getElementById('oZResponse1').innerHTML=newDeathsAustralia;
   document.getElementById('oZResponse2').innerHTML=newRecoveredAustralia;
         
}
};
dbutton.addEventListener('click',getdata);



