// Awesome new feature
function hidePlayer(playerId) {
    document.getElementById(playerId).style.display = 'none'; // Hide the player card
}

function toggleLike(button) {
    const likeBtn = button;
    const dislikeBtn = button.parentNode.querySelector('.dislike-btn');
    if (likeBtn.classList.contains('green')) {
        likeBtn.classList.remove('green'); // Remove the liked state
    } else {
        likeBtn.classList.add('green'); // Add the liked state
        dislikeBtn.classList.remove('red'); // Remove the disliked state
    }
}

function toggleDislike(button) {
    const dislikeBtn = button;
    const likeBtn = button.parentNode.querySelector('.like-btn');
    if (dislikeBtn.classList.contains('red')) {
        dislikeBtn.classList.remove('red'); // Remove the disliked state
    } else {
        dislikeBtn.classList.add('red'); // Add the disliked state
        likeBtn.classList.remove('green'); // Remove the liked state
    }
}

function postComment(playerId) {
    const commentInput = document.getElementById('comment-input' + playerId.charAt(playerId.length - 1));
    const commentText = commentInput.value.trim(); // Get trimmed comment text
    if (commentText) {
        const commentsList = document.getElementById('comments-' + playerId);
        const commentElement = document.createElement('p');
        commentElement.textContent = commentText; // Create a new paragraph for the comment
        commentsList.appendChild(commentElement); // Add comment to the comments list
        commentInput.value = ''; // Clear the input field
    }
}

function copyLink() {
    const link = window.location.href; // Get current page URL
    navigator.clipboard.writeText(link) // Copy link to clipboard
        .then(() => alert('Link copied to clipboard!')) // Success message
        .catch(err => console.error('Failed to copy: ', err)); // Error handling
}