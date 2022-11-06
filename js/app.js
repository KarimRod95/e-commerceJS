const productsArray = []
class NewProduct {
    constructor (id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
const iphone = new NewProduct(1, 'Iphone12', 600, 20);
productsArray.push(iphone);
const tv = new NewProduct(2, 'TV', 1000, 40);
productsArray.push(tv);
const ipad = new NewProduct(3, 'IPad', 200, 30);
productsArray.push(ipad);
const pc = new NewProduct(4, 'PC', 800, 15);
productsArray.push(pc);
const keyboard = new NewProduct(5,'Keyboard Logitech', 120, 25);
productsArray.push(keyboard);
const headphones = new NewProduct(6,'Headphones', 80, 30);
productsArray.push(headphones);
const monitor = new NewProduct(7,'Monitor',500, 10);
productsArray.push(monitor);
// manipulador DOM

const selectProd = document.getElementById('list')
productsArray.forEach(element=>{
    const optionProd = document.createElement('option');
    optionProd.innerText = `${element.name}: ${element.price}`;
    optionProd.setAttribute('id', `${element.id}`);
    selectProd.append(optionProd);
})

//carrito
const cart = [];

const addBtn = document.getElementById('addCart');
const checkoutBtn = document.getElementById('checkout');

addBtn.onclick = ()=> {
    const indexProd = selectProd.selectedIndex;
    const selectedProd = productsArray[indexProd];
    cart.push(selectedProd);
}

checkoutBtn.onclick = () => {
    console.log(cart);
    let total = 0;
    cart.forEach((prod)=>{
        total = total + prod.price;
    })
    alert (`You added ${cart.length} products, total purchase: ${total} USD`);
}