 let checkvalidDate = false;
   let mnField=document.querySelector("#mandatorField");
   let mnField1=document.querySelector("#mandatorField1");
   let mnField2=document.querySelector("#mandatorField2");
   let mnField3=document.querySelector("#mandatorField3");
   let tname = document.querySelector("#tname");
   let nmErrMsg = document.querySelector("#nmErrMsg"); 
   let des = document.querySelector("#des");
   let nmErrMsg1 = document.querySelector("#nmErrMsg1");
   let assignee = document.querySelector("#assignee");
   let nmErrMsg2 = document.querySelector("#nmErrMsg2");
   let dDate = document.querySelector("#dDate");
   let nmErrMsg3 = document.querySelector("#nmErrMsg3");
   let btn1=document.querySelector("#sbmt1");
   let validname ,validdes,validassignee;

btn1.onclick = function(){
  datevalidation(dDate,nmErrMsg3);
   if (validname && validdes && validassignee && checkvalidDate){
      alert("adding......");
   }
else
{
   alert("Please,fill all mandatory fields correctly");
   mnField.style.color="red";
   // tname.style.borderColor = "red";
   mnField1.style.color="red";
   // des.style.borderColor = "red"; 
   mnField2.style.color="red";
   mnField3.style.color="red";
}
}

let num=/[0-9]/;                                   //regular expression to prevent numbers to be entered in name field 
tname.addEventListener("input",function(event)
{
   if (event.target.value && event.target.value.match(num)){
      
         nmErrMsg.innerHTML="Please ,fill this field with characters only";
         nmErrMsg.style.color="red";
         nmErrMsg.style.borderColor="red";
         tname.style.borderColor = "red";
         tname.focus();
         validname = false;
         // break;
       
   }else 
      {
       mnField.style.color="white"; 
        nmErrMsg.innerHTML="looks good!";
        nmErrMsg.style.color="green";
        tname.style.borderColor = "green";
        validname=true;
      }
   }
);


des.addEventListener("input",function(event){
   if (event.target.value && event.target.value.match(num)) {
      nmErrMsg1.innerHTML="*Please ,fill this field with characters";
      nmErrMsg1.style.color="red";
      des.style.borderColor = "red"; 
      des.focus();
      validdes=false; 
   } else{
       mnField1.style.color="white";
       des.style.borderColor = "green";
       nmErrMsg1.innerHTML="looks good";
       nmErrMsg1.style.color="green";
       validdes=true;
         
   } 
});

assignee.addEventListener("input",function(event){
   if (event.target.value && event.target.value.match(num))                               
      
        { 
         nmErrMsg2.innerHTML="Please ,fill this field with characsters only";
         nmErrMsg2.style.color="red";
         assignee.style.borderColor = "red"; 
         assignee.focus(); 
         validassignee=false;
        } 
        else 
        {
           mnField2.style.color="white";    
           assignee.style.borderColor = "green";
           nmErrMsg2.innerHTML="looks good";
           nmErrMsg2.style.color="green";
          validassignee=true;
        }
});  

function datevalidation (dateElement,errorElement){
       var currentDate= new Date();
       let dueDate = new Date(dateElement.value);
       if (dueDate ==""){
       
      dueDate.value = new Date().toISOString().slice(0,10);
      // errorElement.innerHTML = "Please choose a date from today";
      //  errorElement.style.color = "red";
      checkValidDate = true;
      
    }
  else if (dueDate < currentDate){
      errorElement.innerHTML = "*Please choose a date from today";
      errorElement.style.color = "red";
      dateElement.focus();
       checkValidDate = false;
       
     } 
      else if (dueDate >= currentDate){
         // errorElement.style.color="green";
         mnField3.style.color="white";
         errorElement.innerHTML= " "
         checkvalidDate=true;
         
      }
      }      
      