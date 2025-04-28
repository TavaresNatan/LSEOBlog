// Filter module
const Filter = (() => {
  let posts = [];
  let filteredPosts = [];
  
  // Initialize the filter
  const init = (allPosts) => {
    posts = allPosts;
    filteredPosts = [...posts];
    
    // Set up event listeners
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    
    if (categoryFilter) {
      categoryFilter.addEventListener('change', applyFilters);
    }
    
    if (searchInput) {
      searchInput.addEventListener('input', applyFilters);
    }
  };
  
  // Apply filters based on category and search
  const applyFilters = () => {
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    // Filter by category first
    let result = posts;
    if (selectedCategory !== 'all') {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    // Then filter by search term
    if (searchTerm) {
      result = result.filter(post => {
        const titleMatch = post.title.toLowerCase().includes(searchTerm);
        
        // Create a temporary div to search in content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = post.content;
        const contentText = tempDiv.textContent || tempDiv.innerText || '';
        const contentMatch = contentText.toLowerCase().includes(searchTerm);
        
        return titleMatch || contentMatch;
      });
    }
    
    filteredPosts = result;
    
    // Trigger the render event
    const filterEvent = new CustomEvent('filter:updated', { detail: { posts: filteredPosts } });
    document.dispatchEvent(filterEvent);
  };
  
  // Update posts data
  const updatePosts = (newPosts) => {
    posts = newPosts;
    applyFilters();
  };
  
  // Get currently filtered posts
  const getFilteredPosts = () => {
    return filteredPosts;
  };
  
  return {
    init,
    applyFilters,
    updatePosts,
    getFilteredPosts
  };
})();