var productArray =[
	{
		img:"p1.png",
		name:"Green Hoody",
		price:"$25"
	},
	{
		img:"p2.png",
		name:"Green Light Hoody",
		price:"$22"
	},
	{
		img:"p3.png",
		name:"Blue Hoody",
		price:"$35"
	},
	{
		img:"p4.jpeg",
		name:"Black Catch",
		price:"$45"
	},
	{
		img:"p4.jpg",
		name:"Leather Shoe",
		price:"$55"
	},
	{
		img:"p5.png",
		name:"Leather Shoe Black",
		price:"$85"
	},
	{
		img:"p7.png",
		name:"Leather Shoe Chocolatek",
		price:"$115"
	},
	{
		img:"p8.png",
		name:"Leather Shoe Italian",
		price:"$155"
	},
	{
		img:"p10.jpg",
		name:"Long Coat White",
		price:"$59"
	},
	{
		img:"p12.png",
		name:"Long Coat Gray",
		price:"$88"
	},
	{
		img:"p11.png",
		name:"Long Coat Chocolatek",
		price:"$40"
	},
	{
		img:"p13.png",
		name:"Blue Coat",
		price:"$79"
	},
	{
		img:"xxx.png",
		name:"Elon Musk",
		price:"$999"
	},
];

const oneClick=(productDinamic)=>{
	const button =productDinamic.querySelector(".buy-btn").addEventListener("click",(event)=>{
	alert("LOVE YOU 💝");
})
}
console.log(productArray);
const productListWrapper = document.querySelector(".product-list");
productArray.map((res)=>{
	product_name = res.name;
	var productDinamic = document.createElement("div");
	productDinamic.innerHTML=`
		<div class="product">
            <div class="product-wrapper">
                <div class="product-image">
                    <img src="${res.img}">
                </div>
                <div class="product-details">
                    <h2 class="product-name">${res.name}</h2>
                    <h3 class="product-price">${res.price}</h3>
                </div>
                <div class="btn-sec">
                    <button class="buy-btn">BUY</button>
                </div>
            </div>
        </div>
	`;
	productListWrapper.appendChild(productDinamic);
	oneClick(productDinamic)
});










// -----------------search area------------//
// ------bananor por ei tag gulo html a chole gese and sekhan 
//theke ami eder access korte partesi | obossoy banaor pore//
const product = document.querySelectorAll(".product");
const UserSearch = document.querySelector("input");
const productName = document.querySelectorAll("h2");

UserSearch.addEventListener("keyup",(event)=>{
	var userInputValue = event.target.value;
	userInputValue = userInputValue.toUpperCase();

	for(var i=0;i<productName.length;i++){
		var tags = product[i].getElementsByTagName("h2")[0];
		var value = tags.innerHTML||tags.textContent;
		if(value.toUpperCase().indexOf(userInputValue)> -1){
			product[i].style.display=""
		}else{
			product[i].style.display="none"
		}
	}
})