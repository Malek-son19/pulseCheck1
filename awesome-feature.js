// Awesome new feature

function hidePlayer(playerId) {
    document.getElementById(playerId).style.display = 'none'; // Hide the player card
}
function toggleLike(button) {
    const playerCard = button.closest('.player');
    const dislikeBtn = playerCard.querySelector('.dislike-btn');

    // Toggle 'liked' class and update the button color
    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
    } else {
        button.classList.add('liked');
        dislikeBtn.classList.remove('disliked'); // Remove dislike if active
    }
}

function toggleDislike(button) {
    const playerCard = button.closest('.player');
    const likeBtn = playerCard.querySelector('.like-btn');

    // Toggle 'disliked' class and update the button color
    if (button.classList.contains('disliked')) {
        button.classList.remove('disliked');
    } else {
        button.classList.add('disliked');
        likeBtn.classList.remove('liked'); // Remove like if active
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
