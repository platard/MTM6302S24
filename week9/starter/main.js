// Data
const products = [
    { id: 1, title: 'Blue T-Shirt', image: 'blue-t-shirt.jpg', price: 7.99, stock: 4, quantity: 1 },
    { id: 2, title: 'Bright Purple T-Shirt', image: 'bright-purple-t-shirt.jpg', price: 5.99, stock: 1, quantity: 1, size: 'M' },
    { id: 3, title: 'Cobalt Blue T-Shirt', image: 'cobalt-blue-t-shirt.jpg', price: 9.99, stock: 5, quantity: 1 },
    { id: 4, title: 'Green T-Shirt', image: 'green-t-shirt.jpg', price: 6.99, stock: 0, quantity: 1 },
    { id: 5, title: 'Grey T-Shirt', image: 'blue-t-shirt.jpg', price: 4.99, stock: 2, quantity: 1 },
    { id: 6, title: 'Light Green T-Shirt', image: 'light-green-t-shirt.jpg', price: 7.99, stock: 4, quantity: 1, size: 'M' },
    { id: 7, title: 'Purple T-Shirt', image: 'purple-t-shirt.jpg', price: 7.99, stock: 0, quantity: 1 },
    { id: 8, title: 'Red T-Shirt', image: 'red-t-shirt.jpg', price: 6.99, stock: 3, quantity: 1 },
    { id: 9, title: 'Teal T-Shirt', image: 'teal-t-shirt.jpg', price: 7.99, stock: 2, quantity: 1, size: 'M'}
]
const categories = ['All', 'T-shrts', 'Electronics', 'Furniture']
const selectedCategory = 'All'

//Display categories
const $categories = document.getElementById('categories')
$categories.innerHTML = ''
const templates = []

// for(const category of categories){
categories.forEach( category => templates.push(`<li class="nav-item">
    <a href="#"  class="nav-link btn btn-light btn-sm rounded-0 mx-1 ${category === selectedCategory ? 'active' : '' }">${category}</a>
    </li>
    ` ) // closes push
) //closes forEach

$categories.innerHTML = templates.join('')


// Displays products
    const $products = document.getElementById('products')
    $products.innerHTML = ''
    
    products.forEach( product => {
        // console.log(product)
        //create the main div element: $product
        const $product = document.createElement('div')
        $product.className = "product col col-12 col-md-6 col-lg-4 p-3 bg-light d-flex flex-column"
        //create the image-button element: $image
        const $imageButton = document.createElement('button')
        $imageButton.type = 'button';
        $imageButton.className = 'btn image-button';
        $imageButton.setAttribute('data-bs-toggle', 'modal');
        $imageButton.setAttribute('data-bs-target', '#exampleModal');
    
        const $image = document.createElement('img')
        $image.className = "img-fluid"
        $image.src = `images/${product.image}`
        $image.alt = product.title
        $imageButton.appendChild($image)
        $product.appendChild($imageButton)
    
        //create the title element: $title
        const $title = document.createElement('h2')
        $title.textContent = product.title
    
        const $details = document.createElement('div')
        $details.className = "d-flex flex-column justify-content-between flex-grow-1"
        $details.appendChild($title)
        
        //create the container for price and buy button: $priceContainer
        const $priceContainer = document.createElement('div')
        $priceContainer.className ="d-flex justify-content-between"
    
        //create the price element: $price
        const $price = document.createElement('p')
        const $strong = document.createElement('strong')
        const $em = document.createElement('em')
        $em.textContent = '$' + product.price
        $strong.appendChild($em)
        $price.appendChild($strong)
        $priceContainer.appendChild($price)
        
        //create the buy button: $buyButton
        const $buyButton = document.createElement('button')
        $buyButton.className = "btn btn-secondary rounded-0 buy-button"
        $buyButton.textContent = "Buy"
        $priceContainer.appendChild($buyButton)
        //append the price element and buy button to the price container
        $details.appendChild($priceContainer)
        $product.appendChild($details)
        //append the product to the products container
        $products.appendChild($product)
    
    }  )

/*** Week 7 */
// 1. Create a function to add products to the cart. The function should receive the title and price of the product and add it to the cart array as an object. Then, call the renderCart function to display the products in the cart.
const cart =[]

function addToCart(titleProduct, priceProduct){
    cart.push( 
        {
            title: titleProduct, 
            price: priceProduct
        } 
    )
    renderCart()
}


// 2. Create a function to render the products in the cart. The function should display the products in a list, showing the title and price of each product. At the end of the list, display the total price of all products in the cart.

function renderCart(){
    const htmlTemplate = []
    let total = 0
    // for(const item of cart){
    cart.forEach( item => { 
        htmlTemplate.push(/*html*/`
            <li class="list-group-item d-flex justify-content-between">
                ${item.title}:<em>${item.price}</em>
            </li>`
        )
        total += item.price
    } )
    // }
    htmlTemplate.push(/*html*/`
        <li class="list-group-item d-flex justify-content-between">
            Total:<strong><em>${total}</em></strong>
        </li>`
    )
    document.getElementById('cart').innerHTML = htmlTemplate.join('')
}


// 3.Create a function to populate a modal with product details. The function should receive a product object and display the title of the product in the modal header, and the rest of the properties in the modal body. Use Object.entries to get the key-value pairs of the selected product and display the rest of the properties except title.

function populateModal(product){
    const $modalBody = document.querySelector('.modal-body')
    const htmlTemplate = []

    // document.getElementById('modalLabel').textContent = product.title
    document.getElementById('modalLabel').innerHTML = `<input id="productTitle" type="text" class="form-control" placeholder="Title" value="${product.title}" name="title">`

    Object.entries(product).forEach( property => {
        if( property[0] !== 'title' && property[0] !== 'image' ){
            htmlTemplate.push(/*html*/`
                <div class="input-group mb-3">
                    <span class="input-group-text w-25">${property[0]}</span>
                    <input type="text" class="form-control" name="${property[0]}" value="${property[1]}" >
                </div>
                `)
        }
    } )

    $modalBody.innerHTML = htmlTemplate.join('')

}



