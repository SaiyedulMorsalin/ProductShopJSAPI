const productId = new URLSearchParams(window.location.search).get("product_id");

const singleProduct = async (productId) => {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await res.json();
    const productDetailContainer = document.getElementById("productDetail");
    const productDiv = document.createElement("div");
    productDiv.classList.add("row");
    productDiv.innerHTML = `
            <div class="col-6">
                <img class="w-50 h-50" src="${product.image}" alt="">

            </div>
            <div class="col-4">
                <h6>${product.title}</h6>
                <p>Categories: ${product.category} </p>
                <h4>Price: ${product.price}</h4>
                <h6>Rating ${product.rating.rate} | Reviews(${product.rating.count})</h6>

            </div>
            <div class="col-2 border" style = "border-radius:9px;">
                <h5 class="card-title text-align-center">Related Products</h5>
            </div>
    
    
    `;
    productDetailContainer.appendChild(productDiv)



}


singleProduct(productId);
