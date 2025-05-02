// Blog posts management module
const BlogPosts = (() => {
  // Local storage key
  const STORAGE_KEY = "blog_posts";

  // Get posts from local storage
  const getPosts = () => {
    const posts = localStorage.getItem(STORAGE_KEY);
    return posts ? JSON.parse(posts) : [];
  };

  // Save posts to local storage
  const savePosts = (posts) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  };

  // criar um novo post
  const createPost = (postData) => {
    const posts = getPosts();
    const newPost = {
      id: Date.now().toString(),
      title: postData.title,
      content: postData.content,
      category: postData.category,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    posts.push(newPost);
    savePosts(posts);
    return newPost;
  };

  // Get a post by ID
  const getPostById = (id) => {
    const posts = getPosts();
    return posts.find((post) => post.id === id);
  };

  // Update a post
  const updatePost = (id, updatedData) => {
    const posts = getPosts();
    const index = posts.findIndex((post) => post.id === id);

    if (index !== -1) {
      posts[index] = {
        ...posts[index],
        title: updatedData.title,
        content: updatedData.content,
        category: updatedData.category,
        updatedAt: new Date().toISOString(),
      };

      savePosts(posts);
      return posts[index];
    }
    return null;
  };
  // Deletar um post
  const deletePost = (id) => {
    console.log("called");
    const posts = getPosts();
    const filteredPosts = posts.filter((post) => post.id !== id);

    if (filteredPosts.length !== posts.length) {
      savePosts(filteredPosts);
      return true;
    }
    return false;
  };

  // Get excerpt from HTML content
  const getExcerpt = (htmlContent, maxLength = 150) => {
    // Create a temporary div to extract text from HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const textContent = tempDiv.textContent || tempDiv.innerText || "";

    if (textContent.length <= maxLength) {
      return textContent;
    }

    return textContent.substring(0, maxLength) + "...";
  };

  // Calculate reading time
  const calculateReadingTime = (htmlContent) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const textContent = tempDiv.textContent || tempDiv.innerText || "";

    // Average reading speed: 200 words per minute
    const wordCount = textContent.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return readingTime === 1 ? "1 min read" : `${readingTime} mins read`;
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return {
    getPosts,
    createPost,
    getPostById,
    updatePost,
    deletePost,
    getExcerpt,
    calculateReadingTime,
    formatDate,
  };
})();
