// Data: List of products and categories
const products = [
    { id: 1, title: 'Blue T-Shirt', image: 'blue-t-shirt.jpg', price: 7.99, stock: 4, quantity: 1 },
    { id: 2, title: 'Bright Purple T-Shirt', image: 'bright-purple-t-shirt.jpg', price: 5.99, stock: 1, quantity: 1, size: 'M' },
    { id: 3, title: 'Cobalt Blue T-Shirt', image: 'cobalt-blue-t-shirt.jpg', price: 9.99, stock: 5, quantity: 1 },
    { id: 4, title: 'Green T-Shirt', image: 'green-t-shirt.jpg', price: 6.99, stock: 0, quantity: 1 },
    { id: 5, title: 'Grey T-Shirt', image: 'blue-t-shirt.jpg', price: 4.99, stock: 2, quantity: 1 },
    { id: 6, title: 'Light Green T-Shirt', image: 'light-green-t-shirt.jpg', price: 7.99, stock: 4, quantity: 1, size: 'M' },
    { id: 7, title: 'Purple T-Shirt', image: 'purple-t-shirt.jpg', price: 7.99, stock: 0, quantity: 1 },
    { id: 8, title: 'Red T-Shirt', image: 'red-t-shirt.jpg', price: 6.99, stock: 3, quantity: 1 },
    { id: 9, title: 'Teal T-Shirt', image: 'teal-t-shirt.jpg', price: 7.99, stock: 2, quantity: 1, size: 'M' }
]
const categories = ['All', 'T-shirts', 'Electronics', 'Furniture']
let selectedCategory = 'All'
const cart = []

// Function to display categories
function displayCategories() {
    const $categories = document.getElementById('categories')
    $categories.innerHTML = '' // Clear existing categories
    const templates = []

    // Create category elements and add to templates array
    categories.forEach(category => templates.push(`
        <li class="nav-item">
            <a href="#" class="nav-link btn btn-light btn-sm rounded-0 mx-1 ${category === selectedCategory ? 'active' : ''}">
                ${category}
            </a>
        </li>
    `))

    // Add category elements to the DOM
    $categories.innerHTML = templates.join('')
}

// Function to display products
function displayProducts() {
    const $products = document.getElementById('products')
    $products.innerHTML = '' // Clear existing products

    // Create product elements
    products.forEach(product => {
        const $product = document.createElement('div')
        $product.className = "product col col-12 col-md-6 col-lg-4 p-3 bg-light d-flex flex-column"

        // Create image button for the product
        const $imageButton = document.createElement('button')
        $imageButton.type = 'button'
        $imageButton.className = 'btn image-button'
        $imageButton.setAttribute('data-bs-toggle', 'modal')
        $imageButton.setAttribute('data-bs-target', '#exampleModal')

        // Create image element for the product
        const $image = document.createElement('img')
        $image.className = "img-fluid image-product"
        $image.src = `images/${product.image}`
        $image.alt = product.title
        $image.addEventListener('click', function() {
            populateModal(products[0])
        })
        $imageButton.appendChild($image)
        $product.appendChild($imageButton)

        // Create title element for the product
        const $title = document.createElement('h2')
        $title.textContent = product.title

        // Create details container
        const $details = document.createElement('div')
        $details.className = "d-flex flex-column justify-content-between flex-grow-1"
        $details.appendChild($title)

        // Create price container
        const $priceContainer = document.createElement('div')
        $priceContainer.className = "d-flex justify-content-between"

        // Create price element
        const $price = document.createElement('p')
        const $strong = document.createElement('strong')
        const $em = document.createElement('em')
        $em.textContent = '$' + product.price.toFixed(2) // Ensure price has two decimal places
        $strong.appendChild($em)
        $price.appendChild($strong)
        $priceContainer.appendChild($price)

        // Create buy button for the product
        const $buyButton = document.createElement('button')
        $buyButton.className = "btn btn-secondary rounded-0 buy-button"
        $buyButton.textContent = "Buy"
          // Event listeners for buy buttons
        $buyButton.addEventListener('click', function() {
            addToCart(products[0].title, products[0].price)
        })

        $priceContainer.appendChild($buyButton)
        $details.appendChild($priceContainer)
        $product.appendChild($details)
        $products.appendChild($product)
    })
}

// Function to display product on the cart
function displayCart() {
    const htmlTemplate = []
    let total = 0

    // Create cart item elements
    cart.forEach(item => {
        htmlTemplate.push(`
            <li class="list-group-item d-flex justify-content-between">
                ${item.title}:<em>$${item.price.toFixed(2)}</em>
            </li>
        `)
        total += item.price
    })

    // Create total price element
    htmlTemplate.push(`
        <li class="list-group-item d-flex justify-content-between">
            Total:<strong><em>$${total.toFixed(2)}</em></strong>
        </li>
    `)
    document.getElementById('cart').innerHTML = htmlTemplate.join('')
}

// Function to add a product to the cart
function addToCart(title, price) {
    cart.push({ title, price })
    displayCart()
}

// Function to populate the modal with product details
function populateModal(product) {
    const $modalBody = document.querySelector('.modal-body')
    const htmlTemplate = []

    // Create input fields for each product property (except title and image)
    Object.entries(product).forEach(([key, value]) => {
        if (key !== 'image') {
            htmlTemplate.push(`
                <div class="input-group mb-3">
                    <span class="input-group-text w-25">${key}</span>
                    <input type="text" class="form-control" name="${key}" value="${value}" ${key === 'id'?'disabled':''}>
                </div>
            `)
        }
    })

    // Add product property fields to the modal body
    $modalBody.innerHTML = htmlTemplate.join('')
}

// Function to handle modal form submission
function handleModalFormSubmit(event) {
    event.preventDefault()
    const $modalForm = document.getElementById('modalForm')
    // Update product properties based on form inputs
    for (const element of $modalForm.elements) {
        if (element.name) {
            if (element.name === 'price' || element.name === 'id') {
                products[0][element.name] = parseFloat(element.value) // Ensure price is a number
            } else {
                products[0][element.name] = element.value
            }
        }
    }

    // Re-render products and reinitialize event listeners
    displayProducts()
}

// Event listener for modal form submission
const $modalForm = document.getElementById('modalForm')
$modalForm.addEventListener('submit', handleModalFormSubmit)

// Initialize the app
displayCategories()
displayProducts()

