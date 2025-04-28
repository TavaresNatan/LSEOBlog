console.log("main.js loaded");

// Main application code
document.addEventListener("DOMContentLoaded", () => {
  console.log("main.js openned");

  // DOM elements
  const postsContainer = document.getElementById("posts-container");
  const emptyState = document.getElementById("empty-state");
  const newPostBtn = document.getElementById("new-post-btn");
  const postModal = document.getElementById("post-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const postForm = document.getElementById("post-form");
  const postTitleInput = document.getElementById("post-title");
  const postCategorySelect = document.getElementById("post-category");
  const postContentTextarea = document.getElementById("post-content");
  const contentPreview = document.getElementById("content-preview");
  const modalTitle = document.getElementById("modal-title");

  // Post detail modal elements
  const postDetailModal = document.getElementById("post-detail-modal");
  const closeDetailModalBtn = document.getElementById("close-detail-modal");
  const detailTitle = document.getElementById("detail-title");
  const detailCategory = document.getElementById("detail-category");
  const detailDate = document.getElementById("detail-date");
  const detailReadingTime = document.getElementById("detail-reading-time");
  const detailContent = document.getElementById("detail-content");
  const editPostBtn = document.getElementById("edit-post-btn");
  const deletePostBtn = document.getElementById("delete-post-btn");

  // Confirmation modal elements
  const confirmModal = document.getElementById("confirm-modal");
  const closeConfirmModalBtn = document.getElementById("close-confirm-modal");
  const confirmDeleteBtn = document.getElementById("confirm-delete");
  console.log(
    "gotten  const confirmDeleteBtn = document.getElementById('confirm-delete');"
  );
  const cancelDeleteBtn = document.getElementById("cancel-delete");

  // Current post being edited or viewed
  let currentPostId = null;

  // Initialize the app
  const init = () => {
    renderPosts();
    setupEventListeners();
    Navigation.init();
  };

  // Set up event listeners
  const setupEventListeners = () => {
    // New post button
    newPostBtn.addEventListener("click", () => {
      openPostModal();
    });

    // Close modal buttons
    closeModalBtn.addEventListener("click", () => {
      closePostModal();
    });

    closeDetailModalBtn.addEventListener("click", () => {
      closeDetailModal();
    });

    closeConfirmModalBtn.addEventListener("click", () => {
      closeConfirmModal();
    });

    // Post form submission
    postForm.addEventListener("submit", handlePostSubmit);

    // Live preview of content
    postContentTextarea.addEventListener("input", updateContentPreview);

    // Detail modal events
    editPostBtn.addEventListener("click", handleEditPost);
    deletePostBtn.addEventListener("click", handleDeleteClick);

    // Confirmation modal events
    confirmDeleteBtn.addEventListener("click", handleConfirmDelete);
    cancelDeleteBtn.addEventListener("click", closeConfirmModal);

    // Filter events
    document.addEventListener("filter:updated", (event) => {
      renderFilteredPosts(event.detail.posts);
    });

    // Close modals on outside click
    window.addEventListener("click", (event) => {
      if (event.target === postModal) {
        closePostModal();
      } else if (event.target === postDetailModal) {
        closeDetailModal();
      } else if (event.target === confirmModal) {
        closeConfirmModal();
      }
    });
  };

  // Render all posts
  const renderPosts = () => {
    const posts = BlogPosts.getPosts();

    // Initialize filter with all posts
    Filter.init(posts);

    // Show or hide empty state
    if (posts.length === 0) {
      postsContainer.innerHTML = "";
      emptyState.style.display = "block";
    } else {
      emptyState.style.display = "none";
      renderPostsList(posts);
    }
  };

  // Render filtered posts
  const renderFilteredPosts = (filteredPosts) => {
    if (filteredPosts.length === 0) {
      postsContainer.innerHTML =
        '<div class="empty-state"><p>No posts match your filter criteria.</p></div>';
    } else {
      renderPostsList(filteredPosts);
    }
  };

  // Render posts list
  const renderPostsList = (posts) => {
    // Sort posts by date (newest first)
    const sortedPosts = [...posts].sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    postsContainer.innerHTML = sortedPosts
      .map((post) => {
        const excerpt = BlogPosts.getExcerpt(post.content);
        const formattedDate = BlogPosts.formatDate(post.createdAt);
        const readingTime = BlogPosts.calculateReadingTime(post.content);

        return `
        <article class="post-card" data-id="${post.id}">
          <div class="post-content">
            <h2 class="post-title">${post.title}</h2>
            <div class="post-meta">
              <span class="category-tag ${post.category}">${post.category}</span>
              <span>${formattedDate}</span>
              <span>${readingTime}</span>
            </div>
            <div class="post-excerpt">${excerpt}</div>
            <a href="#" class="read-more" data-id="${post.id}">Read more</a>
          </div>
        </article>
      `;
      })
      .join("");

    // Add event listeners to "Read more" links
    document.querySelectorAll(".read-more").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const postId = link.getAttribute("data-id");
        console.log("Add event listeners to 'Read more' links - ID:" + postId);
        openDetailModal(postId);
      });
    });
  };

  // Open post modal for creating/editing
  const openPostModal = (postId = null) => {
    currentPostId = postId;
    console.log("const openPostModal = (postId = null) id: " + currentPostId);
    // Reset form
    postForm.reset();
    contentPreview.innerHTML = "";

    if (postId) {
      // Edit mode
      const post = BlogPosts.getPostById(postId);
      if (post) {
        modalTitle.textContent = "Edit Post";
        postTitleInput.value = post.title;
        postCategorySelect.value = post.category;
        postContentTextarea.value = post.content;
        updateContentPreview();
      }
    } else {
      // Create mode
      modalTitle.textContent = "Create New Post";
    }

    postModal.style.display = "block";
  };

  // Close post modal
  const closePostModal = () => {
    postModal.style.display = "none";
    currentPostId = null;
  };

  // Open detail modal
  const openDetailModal = (postId) => {
    const post = BlogPosts.getPostById(postId);
    if (post) {
      currentPostId = postId;

      detailTitle.textContent = post.title;
      detailCategory.textContent = post.category;
      detailCategory.className = `category-tag ${post.category}`;
      detailDate.textContent = BlogPosts.formatDate(post.createdAt);
      detailReadingTime.textContent = BlogPosts.calculateReadingTime(
        post.content
      );
      detailContent.innerHTML = post.content;

      postDetailModal.style.display = "block";
    }
  };

  // Close detail modal
  const closeDetailModal = () => {
    postDetailModal.style.display = "none";
    // currentPostId = null;
  };

  // Open confirm modal
  const openConfirmModal = () => {
    confirmModal.style.display = "block";
  };

  // Close confirm modal
  const closeConfirmModal = () => {
    confirmModal.style.display = "none";
  };

  // Handle form submission for creating/editing posts
  const handlePostSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title: postTitleInput.value,
      category: postCategorySelect.value,
      content: postContentTextarea.value,
    };

    if (currentPostId) {
      // Update existing post
      BlogPosts.updatePost(currentPostId, postData);
    } else {
      // Create new post
      BlogPosts.createPost(postData);
    }

    // Update posts list and close modal
    Filter.updatePosts(BlogPosts.getPosts());
    closePostModal();
    renderPosts();
  };

  // Update content preview
  const updateContentPreview = () => {
    contentPreview.innerHTML = postContentTextarea.value;
  };

  // Handle edit post button click
  const handleEditPost = () => {
    closeDetailModal();
    openPostModal(currentPostId);
  };

  // Handle delete button click
  const handleDeleteClick = () => {
    closeDetailModal();
    openConfirmModal();
  };

  // Handle confirm delete button click
  const handleConfirmDelete = () => {
    console.log("confirmação iniciada");
    console.log(
      "Add event listeners to 'Read more' links - ID:" + currentPostId
    );
    if (currentPostId) {
      BlogPosts.deletePost(currentPostId);
      closeConfirmModal();
      renderPosts();
      currentPostId = null;
    }
  };

  // Initialize the app
  init();
});
