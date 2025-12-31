// Function to add a new recommendation
function addRecommendation() {
    // Get values from the input fields
    let message = document.getElementById("new-rec-text").value;
    let author = document.getElementById("rec-author").value;

    // Validation: Check if inputs are empty
    if (message.trim() === "" || author.trim() === "") {
        alert("Please fill in both fields!");
        return;
    }

    // Requirement 7: Create a new recommendation element
    let newCard = document.createElement("div");
    newCard.classList.add("recommendation-card");
    
    // Format the content
    newCard.innerHTML = `<p>"${message}" - ${author}</p>`;

    // Add it to the list
    let list = document.getElementById("rec-list");
    list.appendChild(newCard);

    // Requirement 9: Popup confirmation message
    alert("Thank you! Your recommendation has been submitted successfully.");

    // Clear the inputs
    document.getElementById("new-rec-text").value = "";
    document.getElementById("rec-author").value = "";
}