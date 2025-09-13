// fetch-data.js

// Step 1: Define the async function
async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    // Step 2: Fetch data
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Step 3: Clear loading text
    dataContainer.innerHTML = '';

    // Step 4: Create <ul>
    const userList = document.createElement('ul');

    // Step 5: Loop through users and add <li>
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    // Step 6: Append list to container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Step 7: Handle errors
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching data:', error);
  }
}

// Step 8: Run when DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);

