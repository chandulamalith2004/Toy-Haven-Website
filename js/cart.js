let cart = JSON.parse(localStorage.getItem("cart")) || [];



function addToCart(id){


    const product = products.find(
        item => item.id === id
    );


    const existing = cart.find(
        item => item.id === id
    );


    if(existing){

        existing.quantity++;

    }
    else{

        cart.push({

            ...product,
            quantity:1

        });

    }



    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();
    showToast("Product added to cart");

}

function displayCart(){


const container =
document.getElementById("cart-container");


if(!container) return;


container.innerHTML="";

if(cart.length === 0){

    container.innerHTML = `

    <div class="empty-cart">

    <h3>Your cart is empty</h3>

    <p>Start adding your favourite collectibles.</p>

    <a href="products.html" class="btn">
    Browse Products
    </a>

    </div>

    `;

    document.getElementById("cart-total").innerHTML =
    "Total: Rs. 0";

    return;

}


let total = 0;



cart.forEach(product=>{


let subtotal =
product.price * product.quantity;


total += subtotal;



container.innerHTML += `


<div class="card">


<img 
src="${product.image}"
width="150"
height="150"
>


<h3>
${product.name}
</h3>


<p>
Category: ${product.category}
</p>


<p>
Price: Rs. ${product.price}
</p>


<p>
Quantity:
</p>



<button onclick="changeQuantity(${product.id}, -1)">
-
</button>


<span>
${product.quantity}
</span>


<button onclick="changeQuantity(${product.id}, 1)">
+
</button>



<p>
Subtotal:
Rs. ${subtotal}
</p>



<button onclick="removeItem(${product.id})">

Remove

</button>



</div>


`;

});

document.getElementById("cart-total").innerHTML =
"Total: Rs. " + total

}

function changeQuantity(id, amount){


const item =
cart.find(product => product.id === id);



item.quantity += amount;



if(item.quantity <=0){

cart =
cart.filter(product => product.id !== id);

}



localStorage.setItem(
"cart",
JSON.stringify(cart)
);



displayCart();
updateCartCount();

}

function removeItem(id){


cart =
cart.filter(product => product.id !== id);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);


displayCart();
updateCartCount();

}


function clearCart(){


localStorage.removeItem("cart");


cart=[];


displayCart();
updateCartCount();

}

function updateCartCount(){

    const cartCount = document.getElementById("cart-count");

    if(!cartCount) return;


    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cart.forEach(product => {

        count += product.quantity;

    });

    cartCount.innerHTML = count;

}



function checkCart(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    if(cart.length === 0){

        showToast("Your cart is empty. Please add products first.");

        return false;

    }


    return true;

}


displayCart();
updateCartCount();

function showToast(message){

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerHTML = message;

    document.body.appendChild(toast);


    setTimeout(()=>{

        toast.classList.add("show");

    },100);


    setTimeout(()=>{

        toast.remove();

    },3000);

}