   let checkvalidDate = false;
   let validFname ,validLname,validmsg,validGPname;
   let mnField=document.getElementById("mandatorField");
   let mnField1=document.getElementById("mandatorField1");
   let mnField2=document.getElementById("mandatorField2");
   let mnField3=document.getElementById("mandatorField3");
   let firstName = document.getElementById("fname");
   let nmErrMsg = document.getElementById("nmErrMsg"); 
   let lastName = document.getElementById("lname");
   let nmErrMsg1 = document.getElementById("nmErrMsg1");
   let dDate = document.getElementById("dDate");
   let nmErrMsg2 = document.getElementById("nmErrMsg2");
   let gp  = document.getElementById("dname");
   let nmErrMsg3=document.getElementById("nmErrMsg3");
   let msg=document.getElementById("message");
   let nmErrMsg4= document.getElementById("nmErrMsg4")
   let submit=document.querySelector("#sbmt");
   let validname ,validdes;

   //on clicking the submit button the form with mandatory validations will be submitted
   submit.onclick = function(){

    datevalidation(dDate,nmErrMsg2);
    if (validFname && validLname && checkvalidDate && validGPname && validmsg){
         mnField.style.color="white";
         mnField1.style.color="white";
         mnField2.style.color="white";
        alert("Booking has been confirmed.....!");
        }
    else
        {
         alert("Fill all mandatory fields correctly");
         mnField.style.color="red";
         mnField1.style.color="red";
         mnField2.style.color="red";
        }
    }
    
    let num=/[0-9]/;  
    firstName.addEventListener("input",function(event)
    {
         if (event.target.value && event.target.value.match(num)){
               nmErrMsg.innerHTML="Please ,fill this field with atleast 4 characters";
               nmErrMsg.style.color="red";
               firstName.style.borderColor = "red";
               firstName.focus();
               validFname = false;
               // break;
            } else 
            
            {
            mnField.style.color="white";
            nmErrMsg.innerHTML="looks good!";
            nmErrMsg.style.color="green";
            firstName.style.borderColor = "green";
            validFname=true;
            }
         }
      );


lastName.addEventListener("input",function(event){
   if (event.target.value && event.target.value.match(num)) {
      nmErrMsg1.innerHTML="*Please ,fill this field with atleast 4 characters";
      nmErrMsg1.style.color="red";
      lastName.style.borderColor = "red"; 
      lastName.focus();
      validLname=false; 
   } else{
       mnField1.style.color="white";
       lastName.style.borderColor = "green";
       nmErrMsg1.innerHTML="looks good!";
       nmErrMsg1.style.color="green";
       validLname=true;
         
   } 
});


function datevalidation (dateElement,errorElement){
       let currentDate= new Date();
       let dueDate = new Date(dateElement.value);
       if (dueDate ==""){
       
      dueDate.value = new Date().toISOString().slice(0,10);
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
         mnField2.style.color="white";
         errorElement.innerHTML= " "
         checkvalidDate=true;
         
      }
      }      
      
    gp.addEventListener("input",function(event){
       if (event.target.value && event.target.value.match(num)) {
         nmErrMsg3.innerHTML="*Please ,fill this field with atleast 8 characters";
         nmErrMsg3.style.color="red";
         gp.style.borderColor = "red"; 
         gp.focus();
         validGPname=false; 
      } else{
        mnField3.style.color="white"; 
        gp.style.borderColor = "green";
        nmErrMsg3.innerHTML="looks good!";
        nmErrMsg3.style.color="green";
        validGPname=true;
         
   } 
});
      
    msg.addEventListener("input",function(event){
      if (event.target.value && event.target.value.length <= 15) {
         nmErrMsg4.innerHTML="*Please ,fill this field with atleast 15 characters";
         nmErrMsg4.style.color="red";
         msg.style.borderColor = "red"; 
         msg.focus();
         validmsg=false; 
      } else{
         msg.style.borderColor ="green";
         nmErrMsg4.innerHTML="looks good!";
         nmErrMsg4.style.color="green";
         validmsg=true;
            
      } 
   });