// Create this new file for search functionality
function performSearch(event) {
    event.preventDefault();
    
    const searchTerm = document.querySelector('.search-input').value.toLowerCase();
    
    // Specific selectors for Hydrogen template
    const allPosts = document.querySelectorAll('.animate-box');  // Main content items
    const allTitles = document.querySelectorAll('.fh5co-heading h1, .fh5co-heading h2'); // Titles
    
    console.log('Search term:', searchTerm);
    console.log('Number of posts found:', allPosts.length);
    console.log('Number of titles found:', allTitles.length);

    let found = false;

    // Search through main content
    allPosts.forEach(post => {
        // Get all text content within the post
        const postText = post.textContent.toLowerCase();
        console.log('Checking post content:', postText);

        if (postText.includes(searchTerm)) {
            post.style.display = 'block';
            found = true;
            console.log('Match found in post');
        } else {
            post.style.display = 'none';
        }
    });

    // Search through titles
    allTitles.forEach(title => {
        const titleText = title.textContent.toLowerCase();
        console.log('Checking title:', titleText);

        const titleSection = title.closest('.animate-box');
        if (titleText.includes(searchTerm)) {
            if (titleSection) {
                titleSection.style.display = 'block';
            }
            found = true;
            console.log('Match found in title');
        } else if (titleSection) {
            titleSection.style.display = 'none';
        }
    });

    let searchResults = document.getElementById('search-results');
    if (!found && searchTerm !== '') {
        if (!searchResults) {
            const message = document.createElement('div');
            message.id = 'search-results';
            message.textContent = 'No results found';
            message.style.color = '#fff';
            message.style.textAlign = 'center';
            message.style.padding = '20px';
            document.querySelector('.search-container').appendChild(message);
        }
    } else if (searchResults) {
        searchResults.remove();
    }

    // Reset display if search is empty
    if (searchTerm === '') {
        allPosts.forEach(post => post.style.display = 'block');
        allTitles.forEach(title => {
            const titleSection = title.closest('.animate-box');
            if (titleSection) {
                titleSection.style.display = 'block';
            }
        });
    }
} 