/* typing animation */

var typed=new Typed('.typing',{
	strings:["Web Designer","Web Developer","Graphic Designer","Mobile Developer"],
	typeSpeed:150,
	BackSpeed:80,
	loop:true
})

//Get Age

let date=new Date()
let bYear=1998
let age=date.getFullYear()-bYear
if(date.getDate()=== 15 && date.getMonth()=== 9){
	document.getElementById('age').innerHTML=age
}else{
	document.getElementById('age').innerHTML=age-1
}

//animations
// let section = document.querySelectorAll(".section");
// let menu = document.querySelectorAll(".nav");

// window.onscroll = () => {
//   section.forEach((i) => {
//     let top = window.scrollY;
//     let offset = i.offsetTop - 150;
//     let height = i.offsetHeight;
//     let id = i.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       menu.forEach((link) => {
//         link.classList.remove("active");
//         document
//           .querySelector("nav a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });
// };
function reveal() {
	var reveals = document.querySelectorAll(".reveal");
  
	for (var i = 0; i < reveals.length; i++) {
	  var windowHeight = window.innerHeight;
	  var elementTop = reveals[i].getBoundingClientRect().top;
	  var elementVisible = 150;
  
	  if (elementTop < windowHeight - elementVisible) {
		reveals[i].classList.add("active");
	  } else {
		reveals[i].classList.remove("active");
	  }
	}
  }
  
  window.addEventListener("scroll", reveal);
  
  reveal();

