function showSection(sectionId) {
    // Hide or Show Section
    const sections = document.getElementsByTagName('section');
    for (let section of sections) {
        if (section.id !== sectionId) {
            section.style.display = 'none'; 
        } else {
            section.style.display = 'block'; 
        }
    }

    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
    });

    const navLinks = document.getElementsByClassName('nav-link');
    // Remove 'active' class from all navbar links
    for (let link of navLinks) {
        link.classList.remove('active');
    }

    // Add 'active' class to the clicked link
    for (let link of navLinks) {
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active'); 
        } else {
            link.classList.remove('active'); 
        }
    }
}

const pizzaData = {
    pizza1: {
        image: "images/order-online-pizza1.jpg",
        name: "Margherita Pizza",
        description1: "Classic pizza with fresh mozzarella and delicious basil.",
        description2: "A classic pizza featuring a perfectly crisp crust topped with rich tomato sauce and creamy, fresh mozzarella cheese. The pizza is finished with a generous sprinkle of fragrant basil leaves, adding a refreshing and aromatic touch.",
        price: "159",
        ps_sm:"159",
        ps_md:"319",
        ps_lg:"449",
    },
    pizza2: {
        image: "images/order-online-pizza2.jpg",
        name: "Hawaiian Pizza",
        description1: "Classic pizza that combines pineapple, paneer, and sweet corn with extra cheese.",
        description2: "The Classic Hawaiian Pizza combines tangy pineapple, soft paneer, and sweet corn, creating a delightful balance of sweet and savory flavors. It's a perfect fusion of tropical sweetness and cheesy indulgence for pizza lovers.",
        price: "159",
        ps_sm:"159",
        ps_md:"319",
        ps_lg:"449",
    },
    pizza3: {
        image: "images/order-online-pizza3.jpg",
        name: "Spring Fling Pizza",
        description1: "Classic pizza with vibrant combination of crisp capsicum, sweet corn, and soft chunks of paneer.",
        description2: "The Spring Fling Pizza features a vibrant combination of crisp capsicum, sweet corn, and soft chunks of paneer. It's a fresh and flavorful delight that brings the taste of spring with every cheesy, savory bite.",
        price: "159",
        ps_sm:"159",
        ps_md:"319",
        ps_lg:"449",
    },
    pizza4: {
        image: "images/order-online-pizza4.jpg",
        name: "Farm Villa Pizza",
        description1: "It features freshness of capsicum,tomatoes,paneer and red paprika topped with korma dip.",
        description2: "The Farm Villa Pizza features the freshness of capsicum, juicy tomatoes, soft paneer, and bold red paprika, all topped with a flavorful korma dip. The rich, creamy korma adds a unique twist, blending aromatic spices with the vibrant vegetable medley.",
        price: "245",
        ps_sm:"245",
        ps_md:"549",
        ps_lg:"755",
    },
    pizza5: {
        image: "images/order-online-pizza5.jpg",
        name: "Tandoori Panner Pizza",
        description1: "It features spicy marinated paneer cubes, fresh onions,capsicum and bell peppers on a crispy crust.",
        description2: "The Tandoori Paneer Pizza features spicy marinated paneer cubes, fresh onions, capsicum and bell peppers on a crispy crust. Topped with melted mozzarella and a drizzle of tangy tandoori sauce for a bold, flavorful experience.",
        price: "245",
        ps_sm:"245",
        ps_md:"549",
        ps_lg:"755",
    },
    pizza6: {
        image: "images/order-online-pizza6.jpg",
        name: "Paneer 65 Pizza",
        description1: "A flavorful combination of paneer 65, crisp capsicum, tangy onions, and bold red paprika, all generously topped with extra cheese.",
        description2: "A flavorful combination of paneer 65, crisp capsicum, tangy onions, and bold red paprika, all generously topped with extra cheese. Each cheesy slice offers a savory kick with a hint of spice, making it a delicious treat for pizza lovers.",
        price: "245",
        ps_sm:"245",
        ps_md:"549",
        ps_lg:"755",
    },
    pizza7: {
        image: "images/order-online-pizza7.jpg",
        name: "English Retreat Pizza",
        description1: "It features a crispy crust,red paprika,capsicum caramelized onions, bell peppers, and olives.",
        description2: "The English Retreat Pizza features a crispy crust with red paprika, capsicum, caramelized onions, bell peppers, and olives. A drizzle of tangy barbecue sauce gives it a unique and flavorful finish.",
        price: "289",
        ps_sm:"289",
        ps_md:"579",
        ps_lg:"785",
    },
    pizza8: {
        image: "images/order-online-pizza8.jpg",
        name: "Cheezy-7 Pizza",
        description1: "An exotic blend of mozzarella,white cheese, tangy cheddar,Monterey Jack,cream orange cheese, Colby, and orange cheddar.",
        description2: "An exotic blend of creamy white mozzarella, rich white cheese, tangy cheddar, smooth Monterey Jack, indulgent cream orange cheese, Colby, and sharp orange cheddar. It's a cheese lover's paradise, offering a mouthwatering variety of flavors in one indulgent pizza.",
        price: "289",
        ps_sm:"289",
        ps_md:"579",
        ps_lg:"785",
    },
    pizza9: {
        image: "images/order-online-pizza9.jpg",
        name: "The Pizza Spot's Special",
        description1: "An exotic pizza consists of macaroni,capsicum,black olives,crispy onion,soft paneer and baby corn loaded with extra cheese.",
        description2: "An exotic pizza loaded with creamy macaroni, crisp capsicum, black olives, crispy onion, soft paneer, and tender baby corn, all topped with extra cheese. Each bite offers a delightful blend of flavors, with the richness of cheese enhancing the vibrant vegetables for a truly indulgent experience.",
        price: "289",
        ps_sm:"289",
        ps_md:"579",
        ps_lg:"785",
    },
    garlic_bread1:{
        image:"images/order-online-garlic-bread1.jpg",
        name:"Cheesy Garlic Bread",
        description1:"Its a combination of soft, buttery bread topped with melted cheese and aromatic garlic for a perfect savory snack.(3 PCS)",
        price:"89",
    },
    garlic_bread2:{
        image:"images/order-online-garlic-bread2.jpg",
        name:"Supreme Garlic Bread",
        description1:"Topped with golden corn,crispy onions,black olives, spicy sliced jalapeños, and a generous layer of melted cheese.(3 PCS)",
        price:"119",
    },
    garlic_bread3:{
        image:"images/order-online-garlic-bread3.jpg",
        name:"Paneer Tikka Garlic Bread",
        description1:"Layered with melted cheese, vibrant red paprika, and flavorful paneer, creating a delightful and savory treat that's simply irresistible.(3 PCS)",
        price:"139",
    },
    combo1:{
        image:"images/order-online-combo1.jpg",
        name:"English Retreat Pizza & Cheesy  Garlic Bread",
        description1:"Combo of delighful English Retreat Pizza(Small) & Cheesy  Garlic Bread(3 PCS) with 250 ml of coke.",
        price:"399",
       
    },
    combo2:{
        image:"images/order-online-combo2.jpg",
        name:"Pizza Mania",
        description1:"Consists of onion pizza,tomato pizza,gloden corn pizza,capsicum & onion pizza(all small),and garlic bread with 250 ml of coke.",
        price:"449",
    },
    combo3:{
        image:"images/order-online-combo3.jpg",
        name:"Margherita Pizza & Farm villa Pizza",
        description1:"Combo of classic cheesy Margherita(small) and Farm Villa Pizza(small) with two 250 ml cokes. ",
        price:"489",
    },
    beverage1:{
        image:"images/order-online-beverage1.jpg",
        name:"Thums Up Can",
        description1:"Can volume 300ml",
        price:"45",
    },
    beverage2:{
        image:"images/order-online-beverage2.jpg",
        name:"Mountain Dew Can",
        description1:"Can volume 300ml",
        price:"50",
    },
    beverage3:{
        image:"images/order-online-beverage3.jpg",
        name:"Coca Cola Can",
        description1:"Can volume 300ml",
        price:"60",
    },
};

// Mobile Menu Modal
function closeModal(event) {
    event.preventDefault(); 
    const target = event.currentTarget.getAttribute('href');

        const modalElement = document.getElementById('mobilemenu');
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
            modalInstance.hide();
        }
        
        window.location.href = target;
}

let selectedOutlet = '';

// Function to select an outlet
function selectOutlet(outlet) {
    selectedOutlet = outlet;  // Store the selected outlet
    localStorage.setItem('selectedOutlet', outlet);
    alert(`You have selected: ${outlet}`);
    displayCartItems()
}

let selectedPizzaId = ''; // Track the currently selected pizza

// Function to open the modal for selection of pizza
function openModal(pizzaId) {
    selectedPizzaId = pizzaId;
    const pizza = pizzaData[pizzaId]; // Fetch pizza data based on unique id

    if (pizza) {
        // Update the modal content with the selected pizza details
        document.getElementById('pizzaImage').src = pizza.image;
        document.getElementById('pizzaTitle').innerText = pizza.name;
        document.getElementById('pizzaDescription').innerText = pizza.description2;
        document.getElementById('pizzaPrice').innerText = "₹" + pizza.price;
        document.getElementById('ps-sm').innerHTML = "₹" + pizza.ps_sm;
        document.getElementById('ps-md').innerHTML = "₹" + pizza.ps_md;
        document.getElementById('ps-lg').innerHTML = "₹" + pizza.ps_lg;

        resetModalForm();
    }
}

// Reset the modal form (clear previous selections)
function resetModalForm() {
    const radioButtons = document.getElementsByName('size');
    for (let radio of radioButtons) {
        radio.checked = false;
    }

    const crustRadioButtons = document.getElementsByName('change crust');
    for (let radio of crustRadioButtons) {
        radio.checked = false;
    }

    // Uncheck all checkboxes for toppings
    const checkboxes = document.getElementsByName('toppings');
    for (let checkbox of checkboxes) {
        checkbox.checked = false;
    }
}


let cart = []; // Array to hold cart items

function addToCart(event, itemId = null, isCustomizable = false) {
    event.preventDefault(); 

    if (!selectedOutlet) {
        alert("Please select a location before adding items to the cart.");
        const modalElement = document.getElementById('pizzaModal');
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
            modalInstance.hide(); // Close the modal
        }
        return; // Stop the function if no outlet is selected
    }

    // Use selectedPizzaId for pizzas (when inside the modal)
    const id = itemId || selectedPizzaId;
    const item = pizzaData[id]; // Fetch the item from pizzaData

    let size = 'N/A';
    let crust = 'N/A';
    let toppings = [];
    let finalPrice = parseFloat(item.price); // Default price for non-pizza items
    let sizePrice = 0
    let crustPrice = 0;

    // If the item is customizable (pizza), handle size, crust, and toppings
    if (isCustomizable) {

        // Get size radio button and calculate size price
        if (document.getElementById('size-small').checked) {
            size = 'Small';
            sizePrice = parseFloat(item.ps_sm);
        } else if (document.getElementById('size-medium').checked) {
            size = 'Medium';
            sizePrice = parseFloat(item.ps_md);
        } else if (document.getElementById('size-large').checked) {
            size = 'Large';
            sizePrice = parseFloat(item.ps_lg);
        } else {
            alert("Please select a pizza size."); 
            return;
        }

        // Get crust radio button and calculate crust price
        if (document.getElementById('Wheat-Thin-Crust').checked) {
            crust = 'Wheat Thin Crust';
            crustPrice = 39;
        } else if (document.getElementById('Cheese-Burst').checked) {
            crust = 'Cheese Burst';
            crustPrice = 49;
        } else if (document.getElementById('Fiery-Cheese-Burst').checked) {
            crust = 'Fiery Cheese Burst';
            crustPrice = 59;
        } else {
            crust = 'Regular'
        }


        // Get toppings checkboxes
        const toppingCheckboxes = document.getElementsByName('toppings');
        let toppingsPrice = 0;
        for (let checkbox of toppingCheckboxes) {
            if (checkbox.checked) {
                toppings.push(checkbox.value);
                if (checkbox.value === 'corn') {
                    toppingsPrice += 29;
                } else if (checkbox.value === 'capsicum') {
                    toppingsPrice += 29;
                } else if (checkbox.value === 'olives') {
                    toppingsPrice += 39;
                } else if (checkbox.value === 'paneer') {
                    toppingsPrice += 39;
                }
            }
        }

        finalPrice = sizePrice + crustPrice + toppingsPrice;
    }

    // Check if the item already exists in the cart (match based on name, size, crust, and toppings for customizable, or just name for non-customizable)
    let existingCartItem = cart.find(cartItem => {
        if (isCustomizable) {
            return cartItem.name === item.name && cartItem.size === size && cartItem.crust === crust && cartItem.toppings === toppings.join(', ');
        } else {
            return cartItem.name === item.name;
        }
    });

    alert(item.name + " has been added to your cart!");

    if (existingCartItem) {
        // If the item already exists, increase the quantity
        existingCartItem.quantity += 1; // objects in JavaScript are passed by reference.
    } else {
        // If the item does not exist, create a new cart item
        let cartItem;
        if (isCustomizable) {
            cartItem = {
                image: item.image,
                name: item.name,
                description: item.description1,
                size: size,
                crust: crust,
                toppings: toppings.length ? toppings.join(', ') : 'N/A',
                price: finalPrice,
                quantity: 1 
            };
        } else {
            cartItem = {
                image: item.image,
                name: item.name,
                description: item.description1,
                price: finalPrice,
                quantity: 1 
            };
        }

        // Add the new item to the cart
        cart.push(cartItem);
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart UI
    displayCartItems();
    updateCartCount();  


    // Close the modal if it was opened for a customizable item (pizzas)
    if (isCustomizable) {
        const modalElement = document.getElementById('pizzaModal');
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
            modalInstance.hide(); // Close the modal
        }
    }
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    let totalItems = 0;
    for (let item of cart) {
        totalItems += item.quantity;
    }
    if (totalItems===0){
        cartCountElement.innerHTML = '';
    }
    else{
        cartCountElement.innerHTML = totalItems;
    }
}

// Increment the quantity of an item
function incrementQuantity(index) {
    cart[index].quantity += 1; // Increase the quantity by 1
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    displayCartItems(); 
    updateCartCount();  

}

// Decrement the quantity of an item
function decrementQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1; // Decrease the quantity by 1
    } else {
        cart.splice(index, 1); // Remove the item from the cart if quantity is 1
    }
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    displayCartItems(); 
    updateCartCount();  

}

// Function to display cart 
function displayCartItems() {
    const cartContainer = document.querySelector('.cart-items');
    const paymentContainer = document.querySelector('.fixed-sidebar');
    let subtotal = 0; 
    cartContainer.innerHTML = ''; 
    let paymentDetails = ''; 

    if (cart.length === 0) {
        cartContainer.innerHTML = '<h4 class="text-center">Your cart is empty</h4>';

        paymentContainer.innerHTML = `
            <h5>Order Summary</h5>
            <p>Subtotal: ₹0.00</p>
            <button class="btn btn-basil-green w-100 ">Proceed to Payment</button>
            `
        return;
    }

    cart.forEach((cartItem, index) => {
        const itemTotalPrice = cartItem.price * cartItem.quantity; // Calculate item total price
        subtotal += itemTotalPrice; // Add to subtotal

        let cartItemHtml = 
           ` <div class="row d-flex justify-content-between py-2 mt-2 mb-4 border-2 border-danger shadow-lg" style="border-radius:10px;">
                <div class="d-flex flex-wrap flex-column flex-md-row gap-1 justify-content-start gap-md-5 align-items-center col-12 py-3 py-md-1">
                    <!-- Item Image -->
                    <img src="${cartItem.image}" alt="${cartItem.name}" style="width: 140px; height: 140px; border-radius:5px"/>
                    
                    <!-- Item Info: Name and Price -->
                    <div class="d-flex flex-column justify-content-center">
                        <h5>${cartItem.name}</h5>
                        <p class="fw-bold">Price: <span class="fw-normal">₹${itemTotalPrice}</span></p>  
                    </div>
                    
                    <!-- If it's a customizable pizza, show size, crust, and toppings -->
                    ${Object.keys(cartItem).length === 8 ? `
                        <div class="d-flex flex-column justify-content-center mt-2">
                            <p class="fw-bold">Pizza Size: <span class="fw-normal">${cartItem.size}</span></p>
                            <p class="fw-bold">Pizza Crust: <span class="fw-normal">${cartItem.crust}</span></p>
                            <p class="fw-bold">Extra Toppings: <span class="fw-normal">${cartItem.toppings}</span></p>
                        </div>
                    ` : ''}

                    <!-- Quantity Controls -->
                    <div class="d-flex flex-column justify-content-center">
                        <button class="btn btn-sm btn-outline-fiery-red" onclick="decrementQuantity(${index})">-</button>
                        <p class="my-1 fw-bold">Quantity: <span class="fw-normal">${cartItem.quantity}</span></p>
                        <button class="btn btn-sm btn-basil-green" onclick="incrementQuantity(${index})">+</button>
                    </div>
                </div>
            </div> `;

        cartContainer.innerHTML += cartItemHtml;

        // Add each cart item to the payment details
        paymentDetails +=
            ` <p class="fw-bold text-start">${cartItem.name} <span class="fw-normal">(x${cartItem.quantity}) - ₹${itemTotalPrice.toFixed(2)}</span></p> `;
    });

    // Calculate GST (18%)
    const gst = subtotal * 0.05;
    const totalAmount = subtotal + gst;

    // Update the payment subtotal, GST, and total in the fixed sidebar
    paymentContainer.innerHTML = 
      ` <h5>Order Summary</h5>
        <p class="fw-bold text-start">Selected Outlet: <span class="fw-normal">${selectedOutlet}</span></p> 
        ${paymentDetails}
        <p class="fw-bold text-start">Subtotal: <span class="fw-normal">₹${subtotal.toFixed(2)}</span></p>
        <p class="fw-bold text-start">GST (5%): <span class="fw-normal">₹${gst.toFixed(2)}</span></p>
        <p class="fw-bold text-start">Total: ₹${totalAmount.toFixed(2)}</p>
        <button class="btn btn-basil-green w-100">Proceed to Payment</button> `;
}

// Call loadCartFromLocalStorage when the page loads
document.addEventListener('DOMContentLoaded', function () { //this ensures that script runs after the HTML is fully loaded
    // Check if the session has already started
    if (!sessionStorage.getItem('sessionActive')) {
        // If no sessionActive, it's a new session (browser/tab just opened)
        localStorage.removeItem('cart');  // Clear the cart for a new session
        sessionStorage.setItem('sessionActive', 'true');  // Mark session as active
    }

    // Load the cart from localStorage (cart will be empty if it was cleared)
    loadCartFromLocalStorage();
});

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    const savedOutlet = localStorage.getItem('selectedOutlet');
    if (savedCart && savedOutlet) {
        cart = JSON.parse(savedCart); 
        selectedOutlet=savedOutlet
        // Parse the cart back into an array
        displayCartItems(); // Function that updates the cart on the page
        updateCartCount();  // Update the cart count based on the loaded cart

    }
}

function navigateToOrderOnline(sectionName,categoryId = null) {
    showSection(sectionName);
    const categorySection = document.getElementById(categoryId);
    if (categorySection) {
        categorySection.scrollIntoView();
    }
    else{
        return
    }
}
