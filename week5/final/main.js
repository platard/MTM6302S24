const tshirts = [
    { id: 1, title: 'Blue T-Shirt', image: 'blue-t-shirt.jpg', price: 7.99, stock: 4, quantity: 1 },
    { id: 2, title: 'Bright Purple T-Shirt', image: 'bright-purple-t-shirt.jpg', price: 5.99, stock: 1, quantity: 1 },
    { id: 3, title: 'Cobalt Blue T-Shirt', image: 'cobalt-blue-t-shirt.jpg', price: 9.99, stock: 5, quantity: 1 },
    { id: 4, title: 'Green T-Shirt', image: 'green-t-shirt.jpg', price: 6.99, stock: 0, quantity: 1 },
    { id: 5, title: 'Grey T-Shirt', image: 'blue-t-shirt.jpg', price: 4.99, stock: 2, quantity: 1 },
    { id: 6, title: 'Light Green T-Shirt', image: 'light-green-t-shirt.jpg', price: 7.99, stock: 4, quantity: 1 },
    { id: 7, title: 'Purple T-Shirt', image: 'purple-t-shirt.jpg', price: 7.99, stock: 0, quantity: 1 },
    { id: 8, title: 'Red T-Shirt', image: 'red-t-shirt.jpg', price: 6.99, stock: 3, quantity: 1 }
]
  

/*** Arrays - basics ***/

//Create an list of two categories: 'jelelery' and 'men's clothing'
const categories = ['jewelery','men\'s clothing']
//Target one element
console.log( categories )
//Reassign the value of the targeted element
categories[1] = 'women\'s clothing'
//Add a new element; warning!
// categories[5] = 'X'
console.log( categories )


/*** Arrays - Manipulation ***/
//Add a new element to the end of the array 'courses'
console.log( categories.push('electronics') )
console.log( categories)
//Remove the last element of the array and save it in a variable.
console.log( categories.pop() )
//Remove the first element on the array and save it in a variable.
const selectedCategory = categories.shift()
console.log( selectedCategory )
console.log( categories )
//Add a new element to the beginin of the array
categories.unshift('electronics')
console.log( categories )
//Removes the first item, and Inserts a new one using the same function. 
 categories.splice( 0, 1, 'furniture' )
 console.log( categories )



/*** Array - Sorting ***/
//Sort the array 
categories.reverse()
console.log(categories)


const views = [2, 5, 8, 11, 200, 1]

// grades.sort( function(a,b){
//     return a - b
// } )
views.sort( (a,b) => a - b )


/*** Array - concatenation ***/

const newProduct = [
    { 
        id: 9, 
        title: 'Teal T-Shirt', 
        image: 'teal-t-shirt.jpg', 
        price: 7.99, 
        stock: 2, 
        quantity: 1 
    }
]
    

// create a new array 'products' that combine 'users' and 'student' array
const products = tshirts.concat(newProduct)

//Create a string variable that contains all the elements of the 'categories' array
console.log(  categories.join(' | ')   )

//Determine if the variable has an array

console.log(Array.isArray(categories))



/*** Searching in Arrays ***/
//Obtain the index of the first item that matches the value 'furtniture'
console.log(  categories.indexOf('women\'s clothing')  )

//Check if the  array includes the element 'photography'
console.log( categories.includes('photography') )

//Find and save any element from the categories array
const categoryFound = categories.find( category => category === 'furniture' )
console.log( categoryFound )


/*** Loops ***/
//Use 'for counting loop' to display, in the console, a list of all titles; use the 'products' array.

for( let i = 0; i < products.length; i++ ){
    // console.log( products[i].title) 
}

//Use a for...of to display the 'title' and 'price' from 'students' array
for( const product of products  ) {
    // console.log( product.title + ' ' + product.price )
}

//Use a for...in to display all the properties of any object
for( const key in newProduct[0]  ) {
    // console.log( key + ': ' + myProduct[0][key] )
}

//Use a for...of and a for...in to display all the properties of every product from the 'products' array

for( const product of products  ) {
    console.log( '********' )
    for( const key in product  ) {
        // console.log( key + ' ' + product[key] )  
    }
}


/*** Practice ***/

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


// Displays categories
const $categories = document.getElementById('categories')
const categoriesTemplate = []
for(const category of categories){
    categoriesTemplate.push( `
    <li class="nav-item">
        <a href="#"  class="nav-link btn btn-light btn-sm rounded-0 mx-1 ${category === 't-shirts' ? 'active' : ''}">${category}</a>
    </li>`)
}
$categories.innerHTML = categoriesTemplate.join('')