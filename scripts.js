// --- PAGE 1: Home Page Interactions ---
function changeHeading() {
    const heading = document.getElementById("main-heading");
    if (heading) {
        heading.textContent = "Explore Exciting College Events!";
    }
}

function toggleCardColor() {
    const cards = document.querySelectorAll(".event-card");
    cards.forEach(card => {
        // Toggle background color style dynamically
        if (card.style.backgroundColor === "rgb(254, 249, 231)") {
            card.style.backgroundColor = "";
        } else {
            card.style.backgroundColor = "#fef9e7"; // Soft pastel yellow
        }
    });
}

function toggleHighlights() {
    const highlights = document.getElementById("highlights-section");
    if (highlights) {
        // Using classList or style display toggle
        if (highlights.style.display === "none") {
            highlights.style.display = "block";
        } else {
            highlights.style.display = "none";
        }
    }
}


// --- PAGE 2: Events Page Interactions ---
function addNewEvent() {
    const inputVal = document.getElementById("newEventInput").value;
    const confirmation = document.getElementById("submissionConfirmation");
    const displayArea = document.getElementById("dynamicEventDisplay");

    if (inputVal.trim() === "") {
        confirmation.style.color = "#e74c3c";
        confirmation.textContent = "Please enter a valid event name!";
        return;
    }

    confirmation.style.color = "#27ae60";
    confirmation.textContent = `Success! Event "${inputVal}" has been submitted.`;

    // Display entered event in designated area
    const newParagraph = document.createElement("p");
    newParagraph.textContent = `Added Event: ${inputVal}`;
    newParagraph.style.fontWeight = "bold";
    displayArea.appendChild(newParagraph);

    // Clear input field
    document.getElementById("newEventInput").value = "";
}

function modifyEventCard() {
    const card1 = document.getElementById("card-1");
    if (card1) {
        card1.style.border = "2px solid #3498db";
        card1.style.backgroundColor = "#ebf5fb";
        const title = card1.querySelector("h3");
        if (title) {
            title.textContent = "★ Featured: AI & Cloud Workshop";
        }
    }
}


// --- PAGE 3: Registration Page Interactions ---
function handleRegistration(event) {
    // Prevent default form page reload behavior
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const roll = document.getElementById("rollNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const eventChoice = document.getElementById("eventSelect").value;
    const errorBox = document.getElementById("error-message");
    const confirmBox = document.getElementById("confirmationMessage");

    // Conditional statements for validation
    if (name === "" || roll === "" || email === "" || eventChoice === "") {
        errorBox.textContent = "Error: Please fill in all required fields before registering.";
        confirmBox.textContent = "";
        return;
    }

    // Clear error message if valid
    errorBox.textContent = "";

    // Display personalized confirmation message
    confirmBox.textContent = `Thank you, ${name} (Roll No: ${roll})! You have successfully registered for ${eventChoice}.`;
}

function changeHeadingFontSize() {
    const heading = document.getElementById("reg-heading");
    if (heading) {
        if (heading.style.fontSize === "2rem") {
            heading.style.fontSize = "1.5rem";
        } else {
            heading.style.fontSize = "2rem";
        }
    }
}

function toggleRegistrationForm() {
    const formContainer = document.getElementById("form-container");
    if (formContainer) {
        if (formContainer.style.display === "none") {
            formContainer.style.display = "block";
        } else {
            formContainer.style.display = "none";
        }
    }
}