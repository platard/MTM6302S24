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

    document.getElementById('exampleModalLabel').textContent = product.title


    Object.entries(product).forEach( property => {
        if( property[0] !== 'title' && property[0] !== 'image' ){
           htmlTemplate.push(/*html*/`<li class="list-group-item">${property[0]} : ${property[1]}`)
        }
    } )

    $modalBody.innerHTML = htmlTemplate.join('')

}




