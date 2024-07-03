// 1. Refactor the cart section to dynamically add products to the cart using the "Buy" button and an event listener.

const $buyButton =  document.querySelector('.buy-button')

$buyButton.addEventListener('click', function(){
    cart.push({
        title : products[0].title,
        price : products[0].price
    })
    renderCart()
})

// 2.Refactor the modal section to dynamically display product details and allow for updates to be saved using an event listener and a form element.

const $imageButton = document.querySelector('.image-button')

$imageButton.addEventListener('click', function(){
    populateModal(products[0])
})

const $modalForm = document.getElementById('modalForm')

$modalForm.addEventListener('submit', function(e){
    e.preventDefault()
    console.log($modalForm.elements)

    for(const element of $modalForm.elements){
        if(element.name){
            if(element.name === 'price'){
                products[0][element.name] = parseFloat(element.value)
            }else{
                products[0][element.name] = element.value
            }
        }
    }

    products[0].title = document.getElementById('productTitle').value

    displayProducts()
})











