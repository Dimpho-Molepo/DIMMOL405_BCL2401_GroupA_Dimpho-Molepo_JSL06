const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

const orderItemsList = document.querySelector("#order-items");
const orderTotal = document.querySelector("#order-total");
const menuSection = document.querySelector("#menu");
const clearOrderButton = document.querySelector( "#clear-order" );

// Display the menu items
function displayMenuItems(menu) {

    for (const [category, items] of Object.entries(menu)) {
        const  categoryHeader = document.createElement("h3");
        categoryHeader.textContent = category;
        menuSection.appendChild(categoryHeader);
        
        const itemList = document.createElement("ul");
        itemList.classList.add("item-list");
        menuSection.appendChild(itemList);

        for (let item of items){

            let itemListElement = document.createElement("li");
            itemListElement.textContent = item;
            itemListElement.onclick = () => addToOrder(item);
            
            itemList.appendChild(itemListElement);

        }
    };
}     

// Add an item to the order
function addToOrder(itemName) {

    const listItem = document.createElement("li");
    listItem.textContent = itemName;

    orderItemsList.append(listItem);
    const currentTotal = parseFloat(orderTotal.textContent);
    const itemPrice = 90; 
    newTotal  = currentTotal + itemPrice;
    orderTotal.textContent = newTotal.toFixed(2);

    listItem.onclick = () => removeOrderedItem(listItem);
}

// Remove an item from the order
function removeOrderedItem(listItem) {
    orderItemsList.removeChild(listItem);   

    const currentTotal = parseFloat(orderTotal.textContent);
    const itemPrice = 90; 
    const newTotal  = currentTotal - itemPrice;
    orderTotal.textContent = newTotal.toFixed(2);
}

// Clear the order function that remove all list items from the order
const clearOrder = () => {
    while (orderItemsList.firstChild){
        orderItemsList.removeChild(orderItemsList.firstChild);
    }

    const newTotal = 0;
    orderTotal.textContent = newTotal.toFixed(2);
}

// Initialize the menu system
function initMenuSystem() {
    displayMenuItems(menu);

}

initMenuSystem();

// Add a click event handler for the clear order button
clearOrderButton.onclick = () => clearOrder(); 