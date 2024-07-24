// Asynchronous function to fetch data from the API
async function fetchData() {
    try {
        // Fetch data from the Quiz API with a limit of 1 question
        const response = await fetch('https://quizapi.io/api/v1/questions?apiKey=CcZyi3fohI6Cb4CkhLsFoQvspIbRZXmvBFkjwq7j&limit=1')
        
        // Parse the JSON response
        const data = await response.json()
        
        // Log the data to the console
        console.log(data)
        
        // Display the first question from the fetched data
        displayQuestion(data[0])
    } catch (error) {
        // Handle any errors that occur
        console.error('An unexpected error occurred:', error)
    }
}

// Function to display the question and its answers
function displayQuestion(data) {
    // Set the question text
    document.getElementById('question').textContent = data.question
    
    // Create each answer option. Only include answers that are not null

}

// Call the fetchData function to initiate the process
fetchData()
