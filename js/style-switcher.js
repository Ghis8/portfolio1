const styleSwitcherToggler=document.querySelector(".style-switcher-toggler")


styleSwitcherToggler.addEventListener("click",()=>{
	document.querySelector('.style-switcher').classList.toggle("open");
})
window.addEventListener('scroll',()=>{
	if(document.querySelector(".style-switcher").classList.contains('open')){
		document.querySelector('.style-switcher').classList.remove('open')
	}
})
/* Theme colors */
const alternateStyle=document.querySelectorAll('.alternate-style')
function setActiveStyle(color){
	alternateStyle.forEach((style)=>{
		if(color === style.getAttribute('title')){
			style.removeAttribute('disabled')
		}
		else{
			style.setAttribute('disabled','true')
		}
	})
}
/* theme light dark */

const dayNight=document.querySelector('.day-night')
dayNight.addEventListener('click',()=>{
	dayNight.querySelector('i').classList.toggle('fa-sun')
	dayNight.querySelector('i').classList.toggle('fa-moon')
	document.body.classList.toggle('dark')

})

window.addEventListener('load',()=>{
	
	if (document.body.classList.contains('dark')) {
		dayNight.querySelector('i').classList.add('fa-sun')

	}
	else{
		dayNight.querySelector('i').classList.add('fa-moon')
	}
})

/*Nav*/

const navbarToggle=document.querySelector('.nav-toggler');
const nav=document.querySelector(".nav")
navbarToggle.addEventListener("click",()=>{
	if(nav.classList.contains('hidden')){
		
		nav.classList.remove('hidden')
	}else{
		nav.classList.add('hidden')
	}
})

nav.addEventListener('click',(e)=>{
	// console.log("element",e.target.nodeName)
	
	if(e.target && e.target.nodeName== 'A'){
		const currentActive=nav.querySelector('.active')
		if(currentActive){
			currentActive.classList.remove('active')
		}
		e.target.classList.add('active')
	}
})
