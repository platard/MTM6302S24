// Data
const products = [
    { id: 1, title: 'Blue T-Shirt', image: 'blue-t-shirt.jpg', price: 7.99, stock: 4, quantity: 1 },
    { id: 2, title: 'Bright Purple T-Shirt', image: 'bright-purple-t-shirt.jpg', price: 5.99, stock: 1, quantity: 1 },
    { id: 3, title: 'Cobalt Blue T-Shirt', image: 'cobalt-blue-t-shirt.jpg', price: 9.99, stock: 5, quantity: 1 },
    { id: 4, title: 'Green T-Shirt', image: 'green-t-shirt.jpg', price: 6.99, stock: 0, quantity: 1 },
    { id: 5, title: 'Grey T-Shirt', image: 'blue-t-shirt.jpg', price: 4.99, stock: 2, quantity: 1 },
    { id: 6, title: 'Light Green T-Shirt', image: 'light-green-t-shirt.jpg', price: 7.99, stock: 4, quantity: 1 },
    { id: 7, title: 'Purple T-Shirt', image: 'purple-t-shirt.jpg', price: 7.99, stock: 0, quantity: 1 },
    { id: 8, title: 'Red T-Shirt', image: 'red-t-shirt.jpg', price: 6.99, stock: 3, quantity: 1 },
    { id: 9, title: 'Teal T-Shirt', image: 'teal-t-shirt.jpg', price: 7.99, stock: 2, quantity: 1 }
]
const categories = ['All', 'T-shrts', 'Electronics', 'Furniture']


// Displays categories
const $categories = document.getElementById('categories')
const categoriesTemplate = []
for(const category of categories){
    categoriesTemplate.push(`
    <li class="nav-item">
        <a href="#"  class="nav-link btn btn-light btn-sm rounded-0 mx-1 ${category === 't-shirts' ? 'active' : ''}">${category}</a>
    </li>`)
}
console.log(categoriesTemplate) 
console.log(categoriesTemplate.join(''))
$categories.innerHTML = categoriesTemplate.join('')

$categories.innerHTML += `<li class="nav-item">`

// Add a new category
$categories.insertAdjacentHTML('beforeend',`<li class="nav-item">
    <a href="#"  class="nav-link btn btn-light btn-sm rounded-0 mx-1">Sandals</a>
</li>`)


// Display products

const $products = document.getElementById('products')
$products.innerHTML = ''
const productsTemplate = []
for(const product of products){

 productsTemplate.push(
    `
    <div class="col col-12 col-md-6 col-lg-4 p-3 bg-light">
        <img class="img-fluid" src="images/${product.image}" alt="${product.title}" />
        <h2>${product.title}</h2>
        <div class="d-flex justify-content-between">
            <p><strong><em>$${product.price}</em></strong></p>
            <button class="btn btn-secondary rounded-0">Buy</button>
        </div>
    </div>
    `)
}
$products.innerHTML = productsTemplate.join('')

//using createElement

// products.forEach( product => {
//     //create the main div element
//     const $product = document.createElement('div')
//     $product.className = 'col col-12 col-md-6 col-lg-4 p-3 bg-light'

//     //create the image element
//     const $image = document.createElement('img')
//     $image.className = 'img-fluid'
//     $image.src = `images/${product.image}`
//     $image.alt = product.title
//     $product.appendChild($image)

//     //create the title element
//     const $title = document.createElement('h2')
//     $title.textContent = product.title
//     $product.appendChild($title)

//     //create the container for price and buy button
//     const $priceContainer = document.createElement('div')
//     $priceContainer.className = 'd-flex justify-content-between'

//     //create the price element
//     const $price = document.createElement('p')
//     const $strong = document.createElement('strong')
//     const $em = document.createElement('em')
//     $em.textContent = `$${product.price}`
//     $strong.appendChild($em)
//     $price.appendChild($strong)
//     $priceContainer.appendChild($price)

//     //create the buy button
//     const $buyButton = document.createElement('button')
//     $buyButton.className = 'btn btn-secondary rounded-0'
//     $buyButton.textContent = 'Buy'
//     $priceContainer.appendChild($buyButton)

//     //append the price element and buy button to the price container
//     $product.appendChild($priceContainer)

//     //append the product to the products container
//     $products.appendChild($product)

// })



