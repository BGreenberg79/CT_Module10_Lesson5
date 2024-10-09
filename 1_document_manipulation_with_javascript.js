// Task 1 Create an array containing information on products

function Products(name, price, description){
    this.name = name;
    this.price = price;
    this.description = description;
};
// constructor function for products ojects

let productArray = []
// productList array
let basketball = new Products("Basketball", 199.99, "Official NBA Game Ball");
let football = new Products("Football", 149.99, "Official NFL Football - The Duke");
let baseball = new Products("Baseball", 24.95, "Rawlings Official MLB Baseball")
// Instantiate product objects
productArray.push(baseball);
productArray.push(football);
productArray.push(basketball);
// Push objects to our array

// Task 2 Write a function to display information on webpage dynamically
function displayProducts() {
    productArray.forEach(product => {
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = `Product Name: ${product.name}<br>Price: ${product.price}<br>Description: ${product.description}<br>`;
        document.getElementById("container").appendChild(newParagraph);
    });
}
// Used a for each loop of every product in productArray to display information for all of the products and assigned this function to onclick of button on html page
// Used .innerHTML method as well as getElementById and Append Child to dynamically write to our HTML document

// Task 3 Implement an Event Listener to trigger display of products when Page loads

function displayProducts2() {
    productArray.forEach(product => {
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = `Product Name: ${product.name}<br>Price: ${product.price}<br>Description: ${product.description}<br>`;
        document.getElementById("container2").appendChild(newParagraph);
    });
}

document.addEventListener("load", displayProducts2());
// Event Listener added for when page is loaded to display products to the second section and second appropriate function is written to write elements to the proper section
