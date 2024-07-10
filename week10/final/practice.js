/*** done in main.js */
// 1. Refactor the cart section to use custom attributes

// 2. Refactor the product details(modal) to use custom attributes.

// 3. Use the 'id' custom attribute and the 'find' method

// 4. Refactor the 'modalForm' to update the data of the corresponding element.

/*** done in practice.js */
// 5. Replicate the add event listener functionality using direct binding for both the buy and product details actions.

// const $buyButtons =  document.querySelectorAll('.buy-button')
// console.log($buyButtons)
// for(const $buyButton of $buyButtons){
//     $buyButton.addEventListener('click', function(e){
//         addToCart(e.target.dataset.productTitle, parseFloat(e.target.dataset.productPrice))
//     })
// }

// const $imageProducts = document.querySelectorAll('.image-product')
// console.log($imageProducts)
// for(const $imageProduct of $imageProducts){
//     $imageProduct.addEventListener('click', function(e){
//         const foundProduct = products.find(item => item.id == e.target.dataset.productId)
//         populateModal(foundProduct)
//     })
// }

// 6. Refactor the event listeners to use the event delegation
const $products = document.getElementById('products')

$products.addEventListener('click', function(e){

    if(e.target.classList.contains('buy-button')){
        console.log(e.target)
        addToCart(e.target.dataset.productTitle, parseFloat(e.target.dataset.productPrice))
    }

    if(e.target.classList.contains('image-product')){
        const foundProduct = products.find(item => item.id == e.target.dataset.productId)
        populateModal(foundProduct)
    }

})