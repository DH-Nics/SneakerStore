const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const currentProductDesc = document.querySelector(".productDesc");

const products = [
    {
        id: 1,
        title: "Nike Air Max",
        price: 299,
        desc: "The Nike Air Max is a legendary sneaker known for comfort and visible Air cushioning. Built for lifestyle and performance.",
        colors: [
            { code: "black", img: "./img/Product/air.png" },
            { code: "darkred", img: "./img/Product/air2.png" },
        ],
    },
    {
        id: 2,
        title: "Adidas Ultraboost",
        price: 379,
        desc: "Adidas Ultraboost offers energy return with every step thanks to its Boost cushioning and sock-like fit.",
        colors: [
            { code: "lightgray", img: "./img/Product/jordan.png" },
            { code: "darkblue", img: "./img/Product/jordan2.png" },
        ],
    },
    {
        id: 3,
        title: "Puma RS-X",
        price: 289,
        desc: "The Puma RS-X brings bold design with extreme comfort and retro-futuristic vibes. Stand out from the crowd.",
        colors: [
            { code: "gray", img: "./img/Product/blazer.png" },
            { code: "green", img: "./img/Product/blazer2.png" },
        ],
    },
    {
        id: 4,
        title: "New Balance 990",
        price: 419,
        desc: "Made in the USA, the New Balance 990 blends premium materials with all-day support and classic design.",
        colors: [
            { code: "black", img: "./img/Product/crater.png" },
            { code: "lightgray", img: "./img/Product/crater2.png" },
        ],
    },
    {
        id: 5,
        title: "Converse Chuck 70",
        price: 249,
        desc: "A timeless icon, the Chuck 70 combines classic Converse DNA with upgraded cushioning and vintage detailing.",
        colors: [
            { code: "gray", img: "./img/Product/hippie.png" },
            { code: "black", img: "./img/Product/hippie2.png" },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// ✅ INITIALIZE PRODUCT INFO ON LOAD
function setProduct(product) {
    currentProductTitle.textContent = product.title;
    currentProductPrice.textContent = "RM" + product.price;
    currentProductImg.src = product.colors[0].img;
    currentProductDesc.textContent = product.desc;

    currentProductColors.forEach((color, index) => {
        if (product.colors[index]) {
            color.style.backgroundColor = product.colors[index].code;
            color.style.display = "inline-block";
        } else {
            color.style.display = "none";
        }
    });

    // Reset selected size styling
    currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
    });
}

// Set initial product on page load
setProduct(choosenProduct);

// 🔁 Update on menu item click
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        choosenProduct = products[index];
        setProduct(choosenProduct);
    });
});

// 🖼 Change image on color click
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        if (choosenProduct.colors[index]) {
            currentProductImg.src = choosenProduct.colors[index].img;
        }
    });
});

// ✅ Size selector logic
currentProductSizes.forEach((size) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((s) => {
            s.style.backgroundColor = "white";
            s.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

// 🛒 Payment popup toggle
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});