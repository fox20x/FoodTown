let cart = document.body.querySelector('.cart_icon');
let orderBlock = document.body.querySelector('.container_order');
let orderClose = document.getElementById('close_order');

let countShopValue = document.getElementById('count_shop');
let orderTable = document.getElementById('table_order');

let sum = document.body.querySelector('.nav h6');

console.log(foodArr);


function orderList(arr) {
	let sum = 0
	for (i in arr){
	let tr = document.createElement('tr');
	tr.innerHTML += `<th>${arr[i].name}</th> <td>${arr[i].price}</td>`;
	orderTable.append(tr)
	sum += arr[i].price;
	}
	return sum
}

function cleanOrderTable() {
	orderTable.innerHTML = '<tr><th>ПРОДУКТ</th><td>ЦЕНА</td></tr>'
}

cart.addEventListener("click", () => {
	orderBlock.style.display = 'block';
	orderBlock.style.right = '0';
	orderBlock.style.width = '100%';
	let x = orderList(foodArr);
	sum.innerHTML = `ИТОГО ${x} сум`;
});

orderClose.addEventListener("click" , () =>{
	orderBlock.style.right = '-100%';
	orderBlock.style.width = '0%';
	cleanOrderTable();
})

