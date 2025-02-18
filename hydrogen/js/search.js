// Add this at the very top of your search.js file
console.log('Search script loaded!');

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            console.log('Searching for:', searchTerm);
            
            // Get all posts
            const posts = document.querySelectorAll('.item');
            console.log('Found posts:', posts.length);
            
            let found = false;
            
            posts.forEach(post => {
                // Get both title and author
                const title = post.querySelector('h3');
                const titleText = title ? title.textContent.toLowerCase() : '';
                
                // Skip the "Your New Post Title" template post
                if (titleText === 'your new post title') {
                    post.style.display = 'none';
                    return;
                }
                
                if (titleText.includes(searchTerm)) {
                    post.style.display = 'block';
                    found = true;
                    console.log('Match found:', titleText);
                } else {
                    post.style.display = 'none';
                }
            });
            
            // Handle "No results found" message
            let noResults = document.querySelector('.no-results');
            
            if (!found && searchTerm !== '') {
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
            
            // Show all posts except template when search is empty
            if (searchTerm === '') {
                posts.forEach(post => {
                    const title = post.querySelector('h3');
                    const titleText = title ? title.textContent.toLowerCase() : '';
                    if (titleText !== 'your new post title') {
                        post.style.display = 'block';
                    }
                });
                if (noResults) noResults.style.display = 'none';
            }
        });
    }
});