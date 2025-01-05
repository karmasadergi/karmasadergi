// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded'); // Debug log
    
    // Get the search input element
    const searchInput = document.getElementById('searchInput');
    console.log('Search input found:', searchInput); // Debug log
    
    // Add event listener for input changes
    searchInput.addEventListener('input', function() {
        // Get the search term and convert to lowercase
        const searchTerm = this.value.toLowerCase();
        console.log('Search term:', searchTerm); // Debug log
        
        // Get all blog post items with the correct class
        const posts = document.querySelectorAll('.col-md-3.col-sm-6.col-xs-12.animate-box');
        console.log('Posts found:', posts.length); // Debug log
        
        let found = false;
        
        // Loop through each post
        posts.forEach(post => {
            // Get the title text
            const title = post.querySelector('h3');
            if (title) {
                const titleText = title.textContent.toLowerCase();
                console.log('Checking title:', titleText); // Debug log
                
                // Check if the title contains the search term
                if (titleText.includes(searchTerm)) {
                    post.style.display = 'block';
                    found = true;
                    console.log('Match found:', titleText); // Debug log
                } else {
                    post.style.display = 'none';
                }
            }
        });
        
        // Handle "No results found" message
        let noResults = document.querySelector('.no-results');
        
        if (!found && searchTerm !== '') {
            console.log('No results found for:', searchTerm); // Debug log
            if (!noResults) {
                noResults = document.createElement('div');
                noResults.className = 'no-results';
                noResults.textContent = 'No results found';
                noResults.style.textAlign = 'center';
                noResults.style.color = '#fff';
                noResults.style.padding = '20px';
                document.querySelector('.search-container').appendChild(noResults);
            }
            noResults.style.display = 'block';
        } else if (noResults) {
            noResults.style.display = 'none';
        }
        
        // Show all posts if search is empty
        if (searchTerm === '') {
            posts.forEach(post => post.style.display = 'block');
            if (noResults) noResults.style.display = 'none';
        }
    });
});