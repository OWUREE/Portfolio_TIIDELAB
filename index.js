button = document.getElementbyId("button");
window.onscroll = Function()
{
	scrollFunction()
};
function scrollFunction(){
	if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
		buton.style.display = "block";
	}
	else {
		button.style.display = "none";
	}
}
function myFunction(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
