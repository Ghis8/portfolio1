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



