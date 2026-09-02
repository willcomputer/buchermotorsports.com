document.getElementById('home').addEventListener('click', function(event) {
    event.preventDefault(); 
    loadFileToElement('pages/home.html')
});

document.getElementById('track').addEventListener('click', function(event) {
    event.preventDefault(); 
    loadFileToElement('pages/track-days.html')
});

document.getElementById('car').addEventListener('click', function(event) {
    event.preventDefault(); 
    loadFileToElement('pages/car.html')
});

document.getElementById('me').addEventListener('click', function(event) {
    event.preventDefault(); 
    loadFileToElement('pages/me.html')
});


// Function to load file content into a specific element
async function loadFileToElement(fileUrl) {
    await fetch(fileUrl)
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response error');
        }
        return response.text(); // Parse the file content as plain text
        })
        .then(htmlText => {
        document.getElementById('root').innerHTML = htmlText;
        })
        .catch(error => console.error('Error loading file:', error));
}

// Example usage:
// loadFileToElement('content.html', 'my-div-container');
loadFileToElement('pages/home.html')