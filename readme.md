# Chat Bot  #

Chat bots are computer programs designed to simulate human conversation with users through text or voice interactions. They have gained popularity in various applications and industries due to their ability to automate tasks, provide customer support, and enhance user experiences. Here's a summary of key points about chat bots:

**Definition:** Chat bots are artificial intelligence (AI) or machine learning programs that can engage in conversation with users. They can understand and generate human-like responses.

**Types:**
**Rule-Based Chat bots:** These follow predefined rules and responses, suitable for handling simple and structured interactions.
**AI-Powered Chat bots:** These use natural language processing (NLP) and machine learning to understand and respond to more complex user inputs.

---
## HTML ##

**Step 1: Create a New Folder**
Create a new folder on your computer to organize your project files called Chat-Bot.

**Step 2: Create an HTML File**
Inside your project folder, create a new file with the ".html" extension.

**Step 3: Set Up the HTML Structure**
In your HTML file, set up the boiler plate:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Chatbot</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Your content goes here -->
    <script src="script.js"></script>
</body>
</html>
```

**Step 4: Setup HTML**

    1. Create a `div` element with a class of `container`.

    2. Inside the `container` div, create another `div` element with a class of `chat-header`, and set the text content to "Simple Chatbot."

    3. Close the `chat-header` div.

    4. Add another `div` element inside the `container` div with a class of `chat-box` and an `id` of `chat-box`.

    5. Inside the `chat-box` div, create another `div` element with a class of `chat-message` and `bot`, and add the desired content for your initial bot message. 

    6. Close the `chat-message` div and then close the `chat-box` div.

    7. Include another `div` element inside the `container` div with a class of `chat-input`.

    8. Inside the `chat-input` div, create an `input` element with the `type` set to "text," an `id` of "user-input," and a `placeholder` attribute set to "Type a message..."

    9. After the `input` element, add a `button` element with an `id` of "send-button," and set the button text to "Send."
    
    10. Close chat-input and chat-container div.
---
## CSS ##

**Create a New CSS**:  Save the file with a ".css" extension, for example, "styles.css". Make sure you save it in a location you can easily access later.

1. **Global Styles**:
   - Style the entire webpage with these global settings.
   - Set the font family, remove margins and padding, and define the background color.

2. **Chat Container Styles**:
   - Customize the chat container's appearance.
   - Specify its width, center it horizontally, add a border, rounded corners, shadow, and background color.

3. **Chat Header Styles**:
   - Style the chat header section.
   - Define background color, text color, text alignment, padding, and font size.

4. **Chat Box Styles**:
   - Customize the chat message box.
   - Add padding, set a maximum height with vertical scrolling.

5. **Chat Message Styles**:
   - Define styles for chat messages (both user and bot).
   - Add padding, margin at the bottom, and rounded corners.

6. **Bot Message Styles**:
   - Style bot messages.
   - Specify background color and text color.

7. **User Message Styles**:
   - Style user messages.
   - Specify background color, text color, and right alignment.

8. **Chat Input Styles**:
    - Customize the chat input area.
    - Use flex for layout and add padding.

9. **Input and Button Styles**:
    - Style the text input and send button.
    - Define properties like padding, background color, border, and cursor.

10. **Button Hover Styles**:
    - Define styles for the button when hovered.
    - Adjust the background color for a hover effect.

---
## JavaScript ##


1. **Define Functions:**
   - Create functions to handle user messages (`addUserMessage`) and bot responses (`addBotMessage`).
   - Implement a function (`handleUserInput`) to manage user input.

2. **Get DOM Elements:**
   - Use `document.getElementById` to fetch references to HTML elements (e.g., chat box, input field, send button).

3. **User Messages:**
   - In `addUserMessage`, create a message `<div>`, style it, and add it to the chat box.

4. **Bot Responses:**
   - In `addBotMessage`, create a message `<div>`, style it, and add it to the chat box.

5. **Handling User Input:**
   - Implement `handleUserInput` to capture user input, trim it, and process it.
   - Display user messages in the chat, clear the input field, and simulate a bot response (replace with your logic).

6. **Event Listeners:**
   - Attach event listeners to the send button and input field to trigger `handleUserInput` on click and Enter key press.

7. **Initial Bot Greeting:**
   - Add an initial bot greeting message using `addBotMessage`.

8. **Testing:**
   - Open the HTML file in a web browser to test your chat application.
