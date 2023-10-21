// Function expression to fetch and display user data
const displayUserData = async () => {
    // Select the user container element
    const userContainer = document.getElementById("userContainer");
    try {
        // Fetch user data from the JSONPlaceholder API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("Failed to fetch data.");
        }

        // Extract JSON data from the response
        const data = await response.json();
        console.log(data);

        let html = "";

        data.forEach((user) => {
            // Generate the Markup for the HTML
            html += `
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${user.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${user.email}</h6>
                            <p class="card-text">Username: ${user.username}</p>
                            <p class="card-text">Phone: ${user.phone}</p>
                            <a href="${user.website}" class="card-link">Website</a>
                        </div>
                    </div>
                </div>
            `;
        });

        // Insert the generated HTML markup into the user container
        userContainer.innerHTML = html;

    } catch (error) {
        // Display an error message if fetching data fails
        userContainer.innerHTML = "An error occurred while fetching data.";
        console.error(error);
    }
}

// Button click event listener to call the displayUserData function
const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", displayUserData);

/* 
HTTP Request Methods:
HTTP defines several request methods that indicate the desired action to be performed on a resource. Each method has a specific purpose and determines how the server should handle the request. Here are some commonly used HTTP request methods:

(Create) POST - Submits data to be processed to a specified resource. It is often used to create new resources on the server.

(Read)GET - Retrieves data from a specified resource. It should only retrieve data and should not have any other side effects.

(Update)PUT - Updates an existing resource with new data. It replaces the entire resource with the new data provided.

(Delete)DELETE - Deletes a specified resource

PATCH - Partially updates an existing resource 
*/

/* 
Different Status Codes for a RESTful API
RESTful APIs use different HTTP status codes to indicate the outcome of a request. Here are some commonly used status codes: 

200 OK: The request was successful, and the response contains the requested data.
201 Created: The request was successful, and a new resource was created as a result.
204 No Content: The request was successful, but the response does not contain any content.
400 Bad Request: The request was malformed or invalid.
401 Unauthorized: The request requires authentication or the provided credentials are invalid.
403 Forbidden: The request is understood, but the server refuses to fulfill it.
404 Not Found: The requested resource could not be found on the server.
500 Internal Server Error: An error occurred on the server while processing the request.
*/