
const showAllCategory = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    const categoriesContainer = document.getElementById("categories-container");


    categoriesContainer.classList.add("list-group");
    categoriesContainer.style.marginLeft = "25px";
    categoriesContainer.style.listStyle = "none";

    data.forEach(category => {

        const li = document.createElement("li");


        li.innerHTML = `
            <i class="fa-regular fa-circle mx-2"></i> 
            <a class="my-2 link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            href="#${category}"
            onclick=" defaultDataLoad('${category.trim()}');">
            ${category}
            </a>
        `;


        categoriesContainer.appendChild(li);
    });
};


const defaultDataLoad = async (category_name) => {

    const productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = "";


    let res;
    if (category_name == "") {
        res = await fetch(`https://fakestoreapi.com/products/${category_name}`);
    }
    else {
        res = await fetch(`https://fakestoreapi.com/products/category/${category_name}`);
        console.log(category_name)
    }

    const data = await res.json();

    data.forEach(product => {

        const productCard = document.createElement("div");
        productCard.classList.add("col-3", "my-1");


        productCard.innerHTML = `
            <div class="card" style="height: 450px;">
                <img style="height:270px;cursor:pointer;" src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-body-primary">${product.title}</h6>
                    <p class="card-text">${product.description.slice(0, 60)}</p>
                </div>
                <div class="d-flex align-items-center justify-content-around my-3">
                    <h5>$${product.price}</h5>
                    <h5><a href="/pages/product_details.html?product_id=${product.id}">Details</a></h5>
                </div>
            </div>
        `;


        const card = productCard.querySelector(".card");
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "4px 4px 8px gray";
        });
        card.addEventListener("mouseout", () => {
            card.style.boxShadow = "";
        });


        productContainer.appendChild(productCard);
    });
};


defaultDataLoad(category_name = "")
showAllCategory();
