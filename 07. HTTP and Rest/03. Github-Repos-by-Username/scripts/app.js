function loadRepos() {

// Get the username entered in the input field
const username = document.getElementById('username').value;
// Get the <ul> element where repositories will be displayed
const reposList = document.getElementById('repos');

// Clear the contents of the list before appending new content
reposList.innerHTML = '';

// Fetch user's GitHub repositories using Fetch API
fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => {
	// Check if the response from the API is successful
	if (!response.ok) {
	  // If there's an issue, throw an error
	  throw new Error('User not found or repositories not available');
	}
	// Parse the response to JSON format
	return response.json();
  })
  .then(repos => {
	// Handle the repositories fetched for the user
	if (repos.length === 0) {
	  // If no repositories are found, throw an error
	  throw new Error('No repositories found for this user');
	}

	// Iterate through each repository and create list items with links
	repos.forEach(repo => {
	  const listItem = document.createElement('li'); // Create a <li> element
	  const link = document.createElement('a'); // Create an <a> element

	  link.href = repo.html_url; // Set the link URL to the repository's HTML URL
	  link.textContent = repo.full_name; // Set the link text to the repository's full name
	  link.target = '_blank'; // Open the link in a new tab

	  listItem.appendChild(link); // Append the link to the list item
	  reposList.appendChild(listItem); // Append the list item to the <ul>
	});
  })
  .catch(error => {
	// Handle errors in case the API request fails or other issues occur
	const errorListItem = document.createElement('li'); // Create a <li> element
	errorListItem.textContent = error.message; // Set the text content to the error message
	reposList.appendChild(errorListItem); // Append the error message to the <ul>
  });

}