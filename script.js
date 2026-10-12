// --- PAGE 1: Home Interactions ---
function changeHeading() {
    const heading = document.getElementById("main-heading");
    if (heading) {
        heading.textContent = "⚡ Nexus '26: Innovation Unleashed!";
    }
}

function toggleCardColor() {
    const cards = document.querySelectorAll(".event-card");
    cards.forEach(card => {
        if (card.style.backgroundColor === "rgb(26, 47, 75)") {
            card.style.backgroundColor = "";
            card.style.borderColor = "#2a3d66";
        } else {
            card.style.backgroundColor = "#1a2f4b";
            card.style.borderColor = "#00f0ff";
        }
    });
}

function toggleHighlights() {
    const highlights = document.getElementById("highlights-section");
    if (highlights) {
        if (highlights.style.display === "none") {
            highlights.style.display = "block";
        } else {
            highlights.style.display = "none";
        }
    }
}


// --- PAGE 2: Events Interactions ---
function addNewEvent() {
    const inputVal = document.getElementById("newEventInput").value;
    const confirmation = document.getElementById("submissionConfirmation");
    const displayArea = document.getElementById("dynamicEventDisplay");

    if (inputVal.trim() === "") {
        confirmation.style.color = "#ff4d4d";
        confirmation.textContent = "Error: Event title cannot be empty!";
        return;
    }

    confirmation.style.color = "#00ffaa";
    confirmation.textContent = `Success! Track "${inputVal}" added to queue.`;

    const newParagraph = document.createElement("p");
    newParagraph.textContent = `Registered Custom Track: ${inputVal}`;
    newParagraph.style.color = "#00f0ff";
    newParagraph.style.fontWeight = "bold";
    displayArea.appendChild(newParagraph);

    document.getElementById("newEventInput").value = "";
}

function modifyEventCard() {
    const card1 = document.getElementById("card-1");
    if (card1) {
        card1.style.border = "2px solid #ff007f";
        card1.style.backgroundColor = "#1f1426";
        const title = card1.querySelector("h3");
        if (title) {
            title.textContent = "🔥 [Featured Priority] Cloud Architecture Lab";
        }
    }
}


// --- PAGE 3: Registration Interactions ---
function handleRegistration(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const roll = document.getElementById("rollNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const eventChoice = document.getElementById("eventSelect").value;
    const errorBox = document.getElementById("error-message");
    const confirmBox = document.getElementById("confirmationMessage");

    if (name === "" || roll === "" || email === "" || eventChoice === "") {
        errorBox.textContent = "Access Denied: Please complete all required form fields.";
        confirmBox.textContent = "";
        return;
    }

    errorBox.textContent = "";
    confirmBox.textContent = `Access Granted! Welcome ${name} (ID: ${roll}). Your slot for ${eventChoice} is confirmed.`;
}

function changeHeadingFontSize() {
    const heading = document.getElementById("reg-heading");
    if (heading) {
        if (heading.style.fontSize === "2.4rem") {
            heading.style.fontSize = "1.5rem";
        } else {
            heading.style.fontSize = "2.4rem";
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