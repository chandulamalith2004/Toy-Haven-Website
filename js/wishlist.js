let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


const container = document.getElementById("wishlist-container");


function displayWishlist(){


container.innerHTML="";


if(wishlist.length === 0){

container.innerHTML =
"<h3>Your wishlist is empty</h3>";

return;

}



wishlist.forEach(product => {


container.innerHTML += `


<div class="card">


<img src="${product.image}">


<h3>
${product.name}
</h3>


<p>
Category: ${product.category}
</p>


<p>
Price: $${product.price}
</p>


<label>
Status:
</label>


<select onchange="changeStatus(${product.id}, this.value)">

<option value="Interested">
Interested
</option>

<option value="Owned">
Owned
</option>

<option value="Not Interested">
Not Interested
</option>

</select>


<br><br>


<button onclick="removeWishlist(${product.id})">

Remove

</button>


</div>


`;


});


}



function removeWishlist(id){


wishlist =
wishlist.filter(product => product.id !== id);



localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);


displayWishlist();


}



displayWishlist();

function changeStatus(id, status){


const product = wishlist.find(
item => item.id === id
);


product.status = status;


localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);


}