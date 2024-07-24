// Asynchronous function to fetch data from the PokeAPI
async function fetchData() {
    try {
        // Fetch the list of Pokémon from the PokeAPI
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
        
        // Parse the JSON response
        const data = await response.json()
        
        // Log the results to the console
        console.log(data)
        
        // Display the first Pokémon's details
        displayPokemon(data.results[1])
    } catch (error) {
        // Handle any errors that occur
        console.error('An unexpected error occurred:', error)
    }
}

// parseURL
// Will return the pokemon's id from the provided url
function parseUrl (url) {
    return url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
}

// Function to display Pokémon information
function displayPokemon(pokemon) {
    // Get the Pokémon ID from the URL
    const pokemonId = parseUrl(pokemon.url)
    
    // Set the image source to the Pokémon's sprite
    document.querySelector('img').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    
    // Set the text content to the Pokémon's name
    document.querySelector('.card-title').textContent = pokemon.name
}


// Call the fetchData function to initiate the process
fetchData()
