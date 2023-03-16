let openShopping = document.querySelector('.cart');
let closeShopping = document.querySelector('.close-shopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.list-card');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
});
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'CHICKEN PAPPERSOUP',
        Image: 'fruit.png',
        price: 'N1,000',
    },
    {
        id: 2,
        name: 'FISH PEPPERSOUP',
        Image: 'fruit.png',
        price: 'N2,000',
    },
    {
        id: 3,
        name: 'BARBEQUE',
        Image: 'fruit.png',
        price: 'N7,000',
    },
    {
        id: 4,
        name: 'NWKOBI',
        Image: 'fruit.png',
        price: 'N1,500',
    },
    {
        id: 5,
        name: 'SUYA',
        Image: 'fruit.png',
        price: 'N1,000',
    },
    {
        id: 6,
        name: 'SHARWAMA',
        Image: 'red',
        price: 'N4,000',
    },
];

let listCardS = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.Image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    });
};
initApp();
function addToCart(key){
    if(listCardS[key] == null){
        listCardS[key] = products[key];
        listCardS[key].quantity = 1;
    }
reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCardS.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}