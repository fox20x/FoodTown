let call = document.getElementById('call');
let callLink = document.getElementById('call_link');

let countShop = document.getElementById('count_shop');
let count = 0;
let addB = document.body.querySelectorAll('#add');

let burger = document.getElementById('menu_burger');
let burgerBlock = document.body.querySelector('.container_burger');
let burgerClose = document.getElementById('close_burger');


function callClick(px, display){
	call.style.width = `${px}px`;
	callLink.style.display = display;
}
function checkOver(){
	return document.body.clientWidth >= 770 ? "mouseover": "pointerdown";
}
function checkOut(){
	return document.body.clientWidth >= 770 ? "mouseout": "pointerup";
}


call.addEventListener(checkOver(), function() {callClick(250 ,'block')})
call.addEventListener(checkOut(), function() {callClick(70, 'none')})

let foodArr = [];
for (i of addB){
	i.addEventListener("click", function(event) {
		count++;
		countShop.innerHTML = count
		foodArr.push({name: event.currentTarget.previousElementSibling.lastElementChild.textContent,
					price: parseInt(event.currentTarget.nextElementSibling.textContent)})
	})

}
//burger
burger.addEventListener("touchstart", () => {
	burgerBlock.style.left = '0';
	burgerBlock.style.width = '100%';})

burgerClose.addEventListener("touchstart", () =>{
	burgerBlock.style.left = '-100%';
	burgerBlock.style.width = '0%';
})
