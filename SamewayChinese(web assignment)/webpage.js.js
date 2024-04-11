
let basketItems = [];
let totalAmount = 0;

function addToBasket(itemName, price, quantityId) {
    const quantity = document.getElementById(quantityId).value;
    basketItems.push({ name: itemName, price: price, quantity: parseInt(quantity) });
    updateBasket();
}

function updateBasket() {
    const basketList = document.getElementById('basket-items');
    const totalElement = document.getElementById('total');
    
    // Clear previous items
    basketList.innerHTML = '';

    // Calculate total amount
    totalAmount = basketItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalElement.textContent = totalAmount+20;
}

//Clear when pressing checkout
function checkout() {
    basketItems = [];
    updateBasket();
}


function showMessage(){
    alert("Thanks for your time and always stay sameway!!!");
}





