console.log("Products JS loaded");


const products = [

{
id:1,
name:"Spider Hero Figurine",
category:"Figurines",
price:5500,
image:"images/products/spider.jpg"
},

{
id:2,
name:"Racing Diecast Car",
category:"Diecast Cars",
price:4500,
image:"images/products/car.jpg"
},

{
id:3,
name:"Fantasy Board Game",
category:"Board Games",
price:2500,
image:"images/products/game.jpg"
},

{
id:4,
name:"Robot Toy",
category:"Toys",
price:4000,
image:"images/products/robot.jpg"
},

{
id:5,
name:"Anime Collector Figure",
category:"Figurines",
price:5500,
image:"images/products/anime.jpg"
},

{
id:6,
name:"Space Explorer Figure",
category:"Figurines",
price:4500,
image:"images/products/space.jpg"
},

{
id:7,
name:"Dinosaur Adventure Figure",
category:"Figurines",
price:4000,
image:"images/products/dinosaur.jpg"
},

{
id:8,
name:"Luxury Sports Car Model",
category:"Diecast Cars",
price:6500,
image:"images/products/luxurycar.jpg"
},

{
id:9,
name:"Classic Vintage Car Model",
category:"Diecast Cars",
price:7000,
image:"images/products/vintagecar.jpg"
},

{
id:10,
name:"Magic Chess Board",
category:"Board Games",
price:5000,
image:"images/products/chess.jpg"
},

{
id:11,
name:"Puzzle Adventure Game",
category:"Board Games",
price:3500,
image:"images/products/puzzle.jpg"
},

{
id:12,
name:"Remote Control Helicopter",
category:"Toys",
price:11500,
image:"images/products/helicopter.jpg"
},

{
id:13,
name:"Building Block Set",
category:"Toys",
price:2500,
image:"images/products/blocks.jpg"
},

{
id:14,
name:"Mini Train Set",
category:"Toys",
price:5000,
image:"images/products/train.jpg"
},

{
id:15,
name:"Transform Robot Toy",
category:"Toys",
price:14500,
image:"images/products/transformer.jpg"
}

];


const container = document.getElementById("product-container");


function displayProducts(items){


    if(!container){
        return;
    }


    container.innerHTML = "";


    items.forEach(product=>{


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
        ${product.category}
        </p>


        <p>
        Rs. ${product.price}
        </p>


        <button onclick="viewDetails(${product.id})">
        View Details
        </button>


        <button onclick="addToCart(${product.id})">
        Add to Cart
        </button>


        <button onclick="addToWishlist(${product.id})">
        Add to Wishlist
        </button>


        </div>


        `;


    });


}



if(container){

    displayProducts(products);

}



const searchInput = document.getElementById("search");


if(searchInput){


searchInput.addEventListener("input",function(){


    const value = this.value.toLowerCase();


    const filteredProducts = products.filter(product =>


        product.name.toLowerCase().includes(value)


    );


    displayProducts(filteredProducts);


});


}



const categorySelect = document.getElementById("category");


if(categorySelect){


categorySelect.addEventListener("change",function(){


    const selectedCategory = this.value;


    if(selectedCategory === "all"){


        displayProducts(products);


    }

    else{


        const filteredProducts = products.filter(product =>


            product.category === selectedCategory


        );


        displayProducts(filteredProducts);


    }


});


}



function viewDetails(id){

const product = products.find(
item => item.id === id
);


document.getElementById("modal-details").innerHTML = `

<img src="${product.image}">

<h3>${product.name}</h3>

<p>${product.category}</p>

<p>Rs. ${product.price}</p>

<button onclick="addToCart(${product.id})">
Add to Cart
</button>

`;


document.getElementById("product-modal").style.display="flex";

}



function addToWishlist(id){


let wishlist =

JSON.parse(localStorage.getItem("wishlist")) || [];



const product = products.find(

item => item.id === id

);



const existing = wishlist.find(

item => item.id === id

);



if(existing){


showToast("Product already in wishlist");

return;


}



wishlist.push({

...product,

status:"Interested"

});



localStorage.setItem(

"wishlist",

JSON.stringify(wishlist)

);

showToast("Added to wishlist");

}

function displayProductOfDay(){

    const dailyContainer = document.getElementById("daily-product");

    if(!dailyContainer){
        return;
    }

    let product = products[Math.floor(Math.random()*products.length)];

    dailyContainer.innerHTML = `

    <img src="${product.image}">

    <h3>${product.name}</h3>

    <p>${product.category}</p>

    <p>Rs. ${product.price}</p>

    <button onclick="addToCart(${product.id})">
    Add to Cart
    </button>

    `;

}


displayProductOfDay();

const closeModal = document.querySelector(".close-modal");


if(closeModal){

closeModal.onclick=function(){

document.getElementById("product-modal").style.display="none";

}

}