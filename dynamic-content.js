const products = {
    '14': {model: "iPhone 14", price: "$1299", color: "Light Blue", image: "iphone14.png"},
    '14pro': {model: "iPhone 14 Pro Max", price: "$1499", color: "Deep Purple", image: "iphone14pr.png"},
    '13': {model: "iPhone 13", price: "$1200", color: "Green", image: "iphone13.png"},
    'ipadpro': {model: "iPad Pro", price: "$1399", color: "White", image: "ipad-pro.png"},
    'ipadair': {model: "iPad Air", price: "$1250", color: "Grey", image: "ipad-air.png"},
    'ipadmini': {model: "iPad Mini", price: "$1299", color: "Pink", image: "ipad-mini.png"},
    'macpro': {model: "Macbook Pro", price: "$2099", color: "Titan", image: "mac-pro.png"},
    'macair': {model: "Macbook Air", price: "$2000", color: "Black", image: "mac-air.png"},
    'mac2022': {model: "Macbook 2022", price: "$1800", color: "Black", image: "mac-2022.png"},
    'watchultra': {model: "Apple Watch Ultra", price: "$1300", color: "Titanium", image: "apple-watch-ultra.png"},
    'watchseries': {model: "Apple Watch Series", price: "$1499", color: "Black", image: "apple-watch-series.png"},
    'watchse': {model: "Apple Watch SE", price: "$1199", color: "Cream", image: "apple-watch-se.png"}
};

function showProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if(productId && products[productId]){
        const product = products[productId];

        // Lấy phần tử img bằng id
        const productImage = document.getElementById("product-image");

        // Đường dẫn ảnh mới
        const srcImage =`./images/${product.image}`;

        // Thiết lập thuộc tính src của image
        productImage.src = srcImage;

        // Lấy phần tử h2 và span bằng id 
        const productModel = document.getElementById("product-h2");
        const productPrice = document.getElementById("product-price");
        const productColor = document.getElementById("dynamic-color");

        // Nội dung mới cho h2 và span
        const newModelContent = `${product.model}`;
        const newPrice = `${product.price}`;
        const newColor = `${product.color}`;

        // Thiết lập nội dung cho phần tử h2 và span
        productModel.innerHTML = newModelContent;
        productPrice.innerText = newPrice;
        productColor.innerText = newColor;
    }else {
        document.getElementById("product-details").innerHTML = "Product not found";
    }

    console.log("showProductDetails is called");
}

document.addEventListener("DOMContentLoaded", function() {
    showProductDetails();
});