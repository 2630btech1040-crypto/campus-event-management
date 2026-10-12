function changeHeading() {
    let heading = document.getElementById("main-heading");
    heading.textContent = "Welcome to Our College Event Portal";
}

function toggleCardColor() {
    let cards = document.querySelectorAll(".event-card");
    cards.forEach(card => {
        if (card.style.backgroundColor === "rgb(255, 230, 230)") {
            card.style.backgroundColor = "";
        } else {
            card.style.backgroundColor = "#ffe6e6";
        }
    });
}

function toggleHighlights() {
    let section = document.getElementById("highlights-section");
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function addNewEvent() {
    let inputVal = document.getElementById("newEventInput").value;
    let confirmation = document.getElementById("submissionConfirmation");
    let displayArea = document.getElementById("dynamicEventDisplay");

    if (inputVal === "") {
        confirmation.textContent = "Please enter an event name.";
        return;
    }

    confirmation.textContent = "Event successfully added!";
    let p = document.createElement("p");
    p.textContent = "New Event: " + inputVal;
    displayArea.appendChild(p);
    document.getElementById("newEventInput").value = "";
}

function modifyEventCard() {
    let card1 = document.getElementById("card-1");
    card1.style.backgroundColor = "#e6f2ff";
    let title = card1.querySelector("h3");
    title.textContent = "Updated: Coding Workshop";
}

function handleRegistration(event) {
    event.preventDefault();

    let name = document.getElementById("studentName").value;
    let roll = document.getElementById("rollNumber").value;
    let email = document.getElementById("email").value;
    let eventChoice = document.getElementById("eventSelect").value;
    let errorBox = document.getElementById("error-message");
    let confirmBox = document.getElementById("confirmationMessage");

    if (name === "" || roll === "" || email === "" || eventChoice === "") {
        errorBox.textContent = "All fields are required!";
        confirmBox.textContent = "";
        return;
    }

    errorBox.textContent = "";
    confirmBox.textContent = "Thank you " + name + "! You are registered for " + eventChoice + ".";
}

function changeHeadingFontSize() {
    let heading = document.getElementById("reg-heading");
    if (heading.style.fontSize === "24px") {
        heading.style.fontSize = "16px";
    } else {
        heading.style.fontSize = "24px";
    }
}

function toggleRegistrationForm() {
    let form = document.getElementById("form-container");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}