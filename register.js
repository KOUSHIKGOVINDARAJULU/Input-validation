const form = document.getElementById("form");
form.addEventListener("submit",function(event){
    event.preventDefault()
});

function error_msg(element,message,id){
    document.getElementById(element).innerHTML=message;
    document.getElementById(element).style.visibility="visible";
    document.getElementById(id).style.borderColor="red";
    document.getElementById(element).style.color="red"
};

function success_msg(element,message,id){
   document.getElementById(element).innerHTML=message;
   document.getElementById(element).style.visibility="visible";
   document.getElementById(id).style.borderColor="green";
};


var isfname = false;
var islname = false;
var ismail = false;
var isnum = false;
var isdob = false;
var isgender = false;
var ispass1 = false;
var ispass2 = false;


// first name validation
$("#fname").on("change", ()=>{
   var first_name = document.getElementById("fname").value.trim();
   var regiex = /^[A-Za-z\s]{3,20}$/;
   if(regiex.test(first_name)){
      isfname = true;
      success_msg("msg_name","","fname");
   }

   else{
      error_msg("msg_name","Invalid Name","fname");
   }
});

$("#lname").on("change",()=>{
   var last_name = document.getElementById("lname").value.trim();
   var regiex = /^([A-Za-z/s]{1,20})$/;  
   if(regiex.test(last_name)){
      islname = true;
      success_msg("msg","","lname");
   }

   else{
      error_msg("msg","Invalid","lname");
   }
})

$("#mail").on("change",()=>{
   var Email = document.getElementById("mail").value.trim();
   var regiex = /^([a-zA-z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-z]{2,9})$/;
   if(regiex.test(Email)){
      ismail = true;
      success_msg("msg_email","","mail");
   }
   else{
      error_msg("msg_email","Invalid Email","mail");
   }
})

$("#num").on("change",()=>{
   var Number = document.getElementById("num").value;
   var regiex = /^[6-9]\d{9}$/;
   if(regiex.test(num)){
      isnum = true;
      success_msg("msg_num","","num");
   }
   else{
      error_msg("msg_num","Invalid Phone Number","num");
   }
})

$("#dob").on("change",()=>{
   var date_brith = document.getElementById("dob").value;
   if(date_brith == ""){
      error_msg("msg_date","please Fill The Date of Birth","dob");
   } 
   else{
      isdob = true;
      success_msg("msg_date","","dob")
   }
})

$("#gender").on("change",()=>{
   var Gender = document.getElementById("gender").value;
   if(Gender =="male" || Gender =="female" || Gender =="others"){
      isgender = true;
      success_msg("msg_gen","","gender");
   }
   else{
      error_msg("msg_gen","Please Select The Gender","gender");
   }
})
$("#pass1").on("change",()=>{
let pass = document.getElementById("pass1");
let passValue = pass.value.trim()
   // var password = document.getElementById("pass1").value.trim();
   let regiex =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,15}$/;
   if(passValue != ""){
      if(regiex.test(passValue)){
         ispass1 = true;
         success_msg("msg_pass1","","pass1")
      }
      else{
         error_msg("msg_pass1","Invalid Password","pass1")
      }
   }
   else{
      error_msg("msg_pass1","Enter The Password","pass1")
   }
})

$("#pass2").on("change",()=>{
   let pass_ct = document.getElementById("pass2");
   let crt_pass = pass_ct.value.trim();
   let ctPass = document.getElementById("pass1");
   let ctPassValue = ctPass.value.trim();
   if(crt_pass !=="" && crt_pass.match(ctPassValue)){
      ispass2 = true;
      success_msg("msg_pass2","","pass2");
   }
   else{
      error_msg("msg_pass2","Please Enter the Same Password","pass2")      
   }
})


const myform = document.getElementById("myform");
myform.addEventListener("submit",function(e){
    e.preventDefault()
});

function validate1(){
    var email = document.getElementById("mail1").value.trim();
     var regiex = /^([a-zA-z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-z]{2,9})$/;
     if(regiex.test(email)){
        document.getElementById("msg_email1").innerHTML = "";
        document.getElementById("msg_email1").style.visibility = "visible";
        document.getElementById("mail1").style.borderColor= "green";
     }
     else{
        document.getElementById("msg_email1").innerHTML = "Invalid";
        document.getElementById("msg_email1").style.visibility = "visible";
        document.getElementById("msg_email1").style.color = "red";
        document.getElementById("mail1").style.borderColor = "red"
     }


     var pass5 = document.getElementById("pass5").value.trim();
     var regiex = /^([A-Za-z0-9]+){8,15}$/;
     if(regiex.test(pass5)){
        document.getElementById("msg_pass5").innerHTML = "";
        document.getElementById("msg_pass5").style.visibility = "visible";
        document.getElementById("pass5").style.borderColor= "green";
     }
     else{
        document.getElementById("msg_pass5").innerHTML = "Invalid";
        document.getElementById("msg_pass5").style.visibility = "visible";
        document.getElementById("msg_pass5").style.color = "red";
        document.getElementById("pass5").style.borderColor = "red"
     }

};

$("#form").on("submit",function(event){
   if(isfname ==true && islname == true && ismail == true && isnum == true && isdob == true && isgender == true && ispass1 == true && ispass2 == true){
      document.getElementById("allmsg").style.visibility = "hidden";
   }
   else{
      document.getElementById("allmsg").innerHTML = "Please Fill The All The Field";
      document.getElementById("allmsg").style.color="red";
      document.getElementById("allmsg").style.visibility="visible";
   }
})

