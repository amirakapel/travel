// ////////////////////////// NAV SCROLL  ////////////////////

// window.addEventListener("scroll",funscroll);

// function funscroll(){
//     var nav = document.querySelector('.navbar');
//     var scrolll =window.scrollY;
//     console.log(scrolll);
//     if(scrolll<200){
//         nav.classList.remove('navscroll');
//     }
//     else{
//         nav.classList.add('navscroll');

//     }
// }

// ////////////////////////////////////////////////////

// ////////////////////////// IMAGE SLAIDER ////////////////////
// var img_arr = [
//     "img/home/header/greece-2197996_1280.jpg",
//     "img/home/header/italy-9505446_1280.jpg",
//     "img/home/header/the-historical-museum-of-moscow-5079680_1280.jpg"
//   ];
  
//   var index = 0; 
  
  
//   var img_conall = document.getElementById("consal_img");
//   var img_conall_2 = document.getElementById("consal_img_2");
  
//   function imageSlider() {
//     //to repet the image
//     index = (index + 1) % img_arr.length;

//     var current, next;

//   //to show the imag
//     if (img_conall.classList.contains("active")) {
//       current = img_conall;
//       next = img_conall_2;
//     } else {
//       current = img_conall_2;
//       next = img_conall;
//     }
  
//     next.src = img_arr[index];
  
//     next.classList.add("active");
//     current.classList.remove("active");
//   }
  
//   setInterval(imageSlider, 2000);
  
  
// ///////////////////////////////////////////////////////////////
// ////////////////////////// TEXT SLAIDER //////////////////////

// var word = " Your Travel Destinations like never before";
// var charindex = 0;
// var deleting = false;

// var elemant = document.getElementById("type_text");

//  function writer () {
//   if (!deleting) {
//    //write the char
//     elemant.textContent = word.substring(0, charindex);
//     charindex++;
    
//     if (charindex > word.length) {
//       // return write when finsh delet
//       setTimeout(() => {

//         deleting = true;
//         writer();

//       }, 1000);
      
//     } else {
//       setTimeout(writer, 100);
//     }

//   } else {
//     // delet char
//     elemant.textContent = word.substring(0, charindex);
//     charindex--;

//     if (charindex < 0) {

//       deleting = false;
//       setTimeout(writer, 500);

//     } else {
//       setTimeout(writer, 50);
//     }
//   }
// }

// writer();

// ///////////////////////////////////////////////////////////////
// /////////////////////////<<FOR DARK MODE>>/////////////////////
// ///////////////////////////////////////////////////////////////

// // function darkMode () {
// //   document.getElementById('bark_mode_body').style.backgroundColor="black";
// //   ///////////////////navbar/////////////////////////
// //   document.querySelector('.navbar-brand').style.color="white";
// //   document.querySelector('#white_1').style.color="white";
// //   document.querySelector('#white_2').style.color="white";
// //   document.querySelector('#white_3').style.color="white";
// //   document.querySelector('#white_4').style.color="white";
// //   document.querySelector('#white_5').style.color="white";
// //   document.querySelector('#white_6').style.color="white";
// //   document.querySelector('#white_7').style.color="white";
// //   document.querySelector('#white_8').style.color="white";
// //   ///////////////////header/////////////////////////
// //   document.querySelector('.header').style.backgroundColor="black";
// //   document.querySelector('.text_writer').style.color="white";
// //   document.querySelector('.header_dark_p').style.color="#d8aea8";
// //   document.querySelector('.header_dark_button').style.color="white";
// //   document.querySelector('.header_dark_button').style.backgroundColor="#d8aea8";
// //   document.querySelector('.header_dark_button').style.boxShadow="0px 3px 17px 4px #d8aea8";
// //   ///////////////////SECATION TRAVEL/////////////////////////
// //   document.querySelector('.travel_darck_h2').style.color="white";
// //   document.querySelector('.travel_darck_h6').style.color="white";
// //   ///////////////////SECATION Services/////////////////////////
// //   document.querySelector('.Services_darck_h22').style.color="white";
// //   document.querySelector('.Services_darck_h66').style.color="white";
// //   document.querySelector('.Services_darck_h31').style.color="white";
// //   document.querySelector('.Services_darck_h32').style.color="white";
// //   document.querySelector('.Services_darck_h33').style.color="white";
// //   document.querySelector('.Services_darck_h34').style.color="white";
// //   ///////////////////SECATION Place/////////////////////////
// //   document.querySelector('.Place_darck_h2').style.color="white";
// //   document.querySelector('.Place_darck_h6').style.color="white";
// //   document.querySelector('.Place_darck_h4_1').style.color="white";
// //   document.querySelector('.Place_darck_h4_2').style.color="white";
// //   document.querySelector('.Place_darck_h4_3').style.color="white";
// //   document.querySelector('.Place_darck_h4_4').style.color="white";
// //   document.querySelector('.Place_darck_h4_5').style.color="white";
// //   document.querySelector('.Place_darck_h4_6').style.color="white";
// //   ///////////////////SECATION Hotel/////////////////////////
// //   document.querySelector('.Hotel_darck_h2').style.color="white";
// //   document.querySelector('.Hotel_darck_h6').style.color="white";
// //   document.querySelector('.Hotel_darck_h4_1').style.color="white";
// //   document.querySelector('.Hotel_darck_h4_2').style.color="white";
// //   document.querySelector('.Hotel_darck_h4_3').style.color="white";
// //   ///////////////////SECATION Rooms/////////////////////////
// //   document.querySelector('.Rooms_darck_h2').style.color="white";
// //   document.querySelector('.Rooms_darck_h6').style.color="white";
// //   document.querySelector('.Rooms_darck_h2_2').style.color="white";
// //   ///////////////////SECATION Resturant/////////////////////////
// //   document.querySelector('.Resturant_darck_h2').style.color="white";
// //   document.querySelector('.Resturant_darck_h6').style.color="white";
// //   document.querySelector('.Resturant_darck_h4_1').style.color="white";
// //   document.querySelector('.Resturant_darck_h4_2').style.color="white";
// //   document.querySelector('.Resturant_darck_h4_3').style.color="white";
// //   ///////////////////SECATION Contact/////////////////////////
// //   document.querySelector('.Contact_darck_h2').style.color="white";
// //   document.querySelector('.Contact_darck_h6').style.color="white";
// //   document.querySelector('#white_8').style.opacity="0";
// //   document.querySelector('#lightMode_buttun').style.opacity="1";
// //   document.querySelector('#lightMode_buttun').style.color="white";
// // }



// // var lightMode =()=> {
// //   document.getElementById('bark_mode_body').style.backgroundColor="white";
// //   ///////////////////navbar/////////////////////////
// //   document.querySelector('.navbar-brand').style.color="black";
// //   document.querySelector('#white_1').style.color="black";
// //   document.querySelector('#white_2').style.color="black";
// //   document.querySelector('#white_3').style.color="black";
// //   document.querySelector('#white_4').style.color="black";
// //   document.querySelector('#white_5').style.color="black";
// //   document.querySelector('#white_6').style.color="black";
// //   document.querySelector('#white_7').style.color="black";
// //   document.querySelector('#white_8').style.color="black";
// //   ///////////////////header/////////////////////////
// //   document.querySelector('.header').style.backgroundColor="#d8aea8";
// //   document.querySelector('.text_writer').style.color="black";
// //   document.querySelector('.header_dark_p').style.color="white";
// //   document.querySelector('.header_dark_button').style.color="white";
// //   document.querySelector('.header_dark_button').style.backgroundColor="black";
// //   document.querySelector('.header_dark_button').style.boxShadow="9px 3px 17px 4px #ffffff";
// //   ///////////////////SECATION TRAVEL/////////////////////////
// //   document.querySelector('.travel_darck_h2').style.color="black";
// //   document.querySelector('.travel_darck_h6').style.color="#777f8a";
// //   ///////////////////SECATION Services/////////////////////////
// //   document.querySelector('.Services_darck_h22').style.color="black";
// //   document.querySelector('.Services_darck_h66').style.color="#777f8a";
// //   document.querySelector('.Services_darck_h31').style.color="black";
// //   document.querySelector('.Services_darck_h32').style.color="black";
// //   document.querySelector('.Services_darck_h33').style.color="black";
// //   document.querySelector('.Services_darck_h34').style.color="black";
// //   ///////////////////SECATION Place/////////////////////////
// //   document.querySelector('.Place_darck_h2').style.color="black";
// //   document.querySelector('.Place_darck_h6').style.color="#777f8a";
// //   document.querySelector('.Place_darck_h4_1').style.color="black";
// //   document.querySelector('.Place_darck_h4_2').style.color="black";
// //   document.querySelector('.Place_darck_h4_3').style.color="black";
// //   document.querySelector('.Place_darck_h4_4').style.color="black";
// //   document.querySelector('.Place_darck_h4_5').style.color="black";
// //   document.querySelector('.Place_darck_h4_6').style.color="black";
// //   ///////////////////SECATION Hotel/////////////////////////
// //   document.querySelector('.Hotel_darck_h2').style.color="black";
// //   document.querySelector('.Hotel_darck_h6').style.color="#777f8a";
// //   document.querySelector('.Hotel_darck_h4_1').style.color="black";
// //   document.querySelector('.Hotel_darck_h4_2').style.color="black";
// //   document.querySelector('.Hotel_darck_h4_3').style.color="black";
// //   ///////////////////SECATION Rooms/////////////////////////
// //   document.querySelector('.Rooms_darck_h2').style.color="black";
// //   document.querySelector('.Rooms_darck_h6').style.color="#777f8a";
// //   document.querySelector('.Rooms_darck_h2_2').style.color="black";
// //   ///////////////////SECATION Resturant/////////////////////////
// //   document.querySelector('.Resturant_darck_h2').style.color="black";
// //   document.querySelector('.Resturant_darck_h6').style.color="#777f8a";
// //   document.querySelector('.Resturant_darck_h4_1').style.color="black";
// //   document.querySelector('.Resturant_darck_h4_2').style.color="black";
// //   document.querySelector('.Resturant_darck_h4_3').style.color="whblackite";
// //   ///////////////////SECATION Contact/////////////////////////
// //   document.querySelector('.Contact_darck_h2').style.color="black";
// //   document.querySelector('.Contact_darck_h6').style.color="#777f8a";
// //   document.querySelector('#white_8').style.opacity="1";
// //   document.querySelector('#lightMode_buttun').style.opacity="0";
// //   document.querySelector('#lightMode_buttun').style.color="white";

// // }
// // window.darkMode = darkMode;
// // window.lightMode = lightMode;