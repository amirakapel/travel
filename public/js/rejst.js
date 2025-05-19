// /////////////////////////form/////////////////////////////////

// document.getElementById('changbutton').addEventListener('click',formMove)

// var showwww  = document.getElementById('move');
// var hidee =document.getElementById('hidee');
// var hidee2 =document.getElementById('hidee2');

// function formMove(){
//   showwww.classList.add('active');

//   hidee.classList.add('hidennn');
//   hidee2.classList.add('showw');

//   showwww.style.transform=" translateX(100px)"
//   showwww.style.transition="transform 0.5s ease"


//   document.getElementById('changname').innerHTML="Hello Frind!";
//   document.getElementById('changparg').innerHTML="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.";
//   document.getElementById('changbutton').style.opacity="0";
//   document.getElementById('changbutton2').style.opacity="1";

// }

// document.getElementById('changbutton2').addEventListener('click',formMoveleft)

// function formMoveleft(){
//   showwww.classList.remove('active');


//   hidee.classList.remove('hidennn');
//   hidee2.classList.remove('showw');
  
//   showwww.style.transform=" translateX(0px)"
//   showwww.style.transition="transform 0.5s ease"

//   document.getElementById('changname').innerHTML="welcom To Travel Websit";
//   document.getElementById('changparg').innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo enim magni eligendi eum deserunt?";
//   document.getElementById('changbutton').style.opacity="1";
//   document.getElementById('changbutton2').style.opacity="0";


// }



// // <!-- ///////////// VAILDATE LOGIN FORM ///////////// -->


// var validate_login=()=>{

// var login_email = document.getElementById('login_email').value;
// var login_email_message =document.getElementById('login_email_message');


// var login_Pass = document.getElementById('login_Password').value;
// var login_Pass_message =document.getElementById('login_Password_message');

// login_message ="";
// login_email_message.style.paddingLeft= "10px";
// login_email_message.style.color= "red";
// login_email_message.style.textAlign="left";
// login_email_message.style.transition= "all .2s ease-in";


// login_Pass_message.style.paddingLeft= "10px";
// login_Pass_message.style.color= "red";
// login_Pass_message.style.textAlign="left";
// login_Pass_message.style.transition= "all .2s ease-in";

// if(login_email=="" && login_Pass=="" ){
//  login_message="please enter E-mail";
//   login_email_message.innerHTML=login_message;
//  login_message="please enter Password";
//   login_Pass_message.innerHTML=login_message;

//   return false;

// }else if(login_Pass.length<8){
//    login_message ="please Insert atleast 8 character in password";
//    login_Pass_message.innerHTML=login_message;
//    return false;
// }

// else{
//     return true;
// }
// };


// // <!-- ///////////// VAILDATE SIGIN FORM ///////////// -->

// var validate_sigin=()=>{
// var full_name = document.getElementById('full_name').value;
// var name_message =document.getElementById('name_message');

// var sigin_email = document.getElementById('sigin_email').value;
// var sigin_email_message =document.getElementById('sigin_email_message');


// var sigin_pass = document.getElementById('sigin_pass').value;
// var sigin_pass_message =document.getElementById('sigin_pass_message');

// sigin_message ="";


// name_message.style.paddingLeft= "10px";
// name_message.style.color= "red";
// name_message.style.textAlign="left";
// name_message.style.transition= "all .2s ease-in";

// sigin_email_message.style.paddingLeft= "10px";
// sigin_email_message.style.color= "red";
// sigin_email_message.style.textAlign="left";
// sigin_email_message.style.transition= "all .2s ease-in";


// sigin_pass_message.style.paddingLeft= "10px";
// sigin_pass_message.style.color= "red";
// sigin_pass_message.style.textAlign="left";
// sigin_pass_message.style.transition= "all .2s ease-in";

// if(full_name==""  && sigin_email=="" && sigin_pass=="" ){
//  sigin_message="please enter Full Name";
//  name_message.innerHTML=sigin_message;

//  sigin_message="please enter E-mail";
//  sigin_email_message.innerHTML=sigin_message;

//  sigin_message="please enter Password";
//  sigin_pass_message.innerHTML=sigin_message;

//   return false;

// }
// else if(full_name.length<5 || full_name.length>15){
//    sigin_message ="please Insert 5-15 character in username";
//    name_message.innerHTML=sigin_message;
//    return false;
  
// }
// else if(sigin_pass.length<8){
//    sigin_message ="please Insert atleast 8 character in password";
//    sigin_pass_message.innerHTML=sigin_message;
//    return false;
// }

// else{
//     return true;
// }
// };


