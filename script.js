// Get DOM elements
const chatBox = document.getElementById("chat-box"); // Get the chat box container
const userInput = document.getElementById("user-input"); // Get the user input text field
const sendButton = document.getElementById("send-button"); // Get the send button

// Function to add a user message to the chat box
function addUserMessage(message) {
  const userMessage = document.createElement("div"); // Create a new message element
  userMessage.classList.add("chat-message", "user"); // Add classes for styling
  userMessage.textContent = message; // Set the message text
  chatBox.appendChild(userMessage); // Add the user message to the chat box
}

// Function to add a bot message to the chat box
function addBotMessage(message) {
  const botMessage = document.createElement("div"); // Create a new message element
  botMessage.classList.add("chat-message", "bot"); // Add classes for styling
  botMessage.textContent = message; // Set the message text
  chatBox.appendChild(botMessage); // Add the bot message to the chat box
}

// Function to handle user input
function handleUserInput() {
    const message = userInput.value.trim(); // Get the user's input and trim any leading/trailing whitespace
    if (message !== "") {
      // Check if the message is not empty
      addUserMessage(message); // Add the user's message to the chat box
      userInput.value = ""; // Clear the user input field
  
      // Simulate a bot response (you can replace this with actual logic)
      setTimeout(() => {
        let botResponse = "I am just a simple bot. I do not understand complex queries.";
        // Basic logic for responding to specific user messages
        if (message.toLowerCase().includes("hi")) {
          botResponse = "Hello! How can I assist you today?";
        } else if (message.toLowerCase().includes("help")) {
          botResponse = "Of course! What do you need help with?";
        } else if (message.toLowerCase().includes("bye")) {
          botResponse = "Goodbye! Have a great day!";
        }
        addBotMessage(botResponse); // Simulated bot response
      }, 1000); // Delay for 1 second before adding the bot message
    }
  }


// Event listener for sending messages when the send button is clicked
sendButton.addEventListener("click", handleUserInput);

// Event listener for sending messages when the Enter key is pressed
userInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    // Check if the Enter key was pressed
    handleUserInput(); // Call the function to handle user input
  }
});

// Initial bot greeting
addBotMessage("Hello! How can I assist you?"); // Add an initial greeting message from the bot
