var checkoutCart = JSON.parse(localStorage.getItem("cart")) || [];


let total = 0;


checkoutCart.forEach(product => {

    total += product.price * product.quantity;

});


document.getElementById("checkout-total").innerHTML =
"Order Total: Rs. " + total;



let orderItems = "";


checkoutCart.forEach(product => {

    orderItems += `

    <p>
    ${product.name} x ${product.quantity} - Rs. ${product.price * product.quantity}
    </p>

    `;

});


document.getElementById("order-items").innerHTML = orderItems;



document
.getElementById("checkout-form")
.addEventListener("submit", function(event){


event.preventDefault();

const customerName = document.getElementById("customerName").value.trim();

const email = document.getElementById("email").value.trim();

const address = document.getElementById("address").value.trim();

const payment = document.getElementById("payment").value;



if(
customerName === "" ||
email === "" ||
address === "" ||
payment === ""
){

alert("Please complete all checkout details");

return;

}

const order = {


customerName: document.getElementById("customerName").value,


email: document.getElementById("email").value,


address: document.getElementById("address").value,


payment: document.getElementById("payment").value,


products: checkoutCart,


total: total


};



let orders = JSON.parse(localStorage.getItem("orders")) || [];



orders.push(order);



localStorage.setItem(
"orders",
JSON.stringify(orders)
);



localStorage.removeItem("cart");



document.getElementById("confirmation").innerHTML = `

<div class="success-box">

<h3>
Order placed successfully!
</h3>

<p>
Thank you for shopping with Toy Haven.
</p>

<p>
Your order will be processed shortly.
</p>

</div>

`;



document.getElementById("checkout-total").innerHTML =
"Order Total: Rs. 0";



document.getElementById("order-items").innerHTML = "";



this.reset();



const button = document.querySelector(".btn");


button.disabled = true;


button.innerHTML = "Order Completed";



});