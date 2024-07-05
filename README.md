# Basic ChatBot using Python
![logoo](https://github.com/FaizanDhankwala/ChatBot/assets/55712375/428c513f-20d4-433b-9931-356563cb757e)



This project implements a simple chatbot interface using HTML, CSS, and JavaScript. The chatbot allows users to input messages, matches them with predefined questions, and provides responses. Users can also teach the chatbot new responses if it doesn't recognize the input. 
This chatbot is pretty simple and mainly uses json to remember responses. Using fuzzy matching, the chatbot attempts to recognize and respond to various forms of input, learning new responses when unfamiliar queries arise. 


## Features

- **User Interface**: Clean and intuitive interface designed with HTML and styled with CSS.
- **Message Handling**: JavaScript handles user input, matches questions using fuzzy matching, and displays responses.
- **Teaching Functionality**: If the chatbot doesn't recognize a message, it prompts the user to teach it a new response.
- **Animations**: Messages animate into view when sent and received.
- **Responsive Design**: Interface adapts to different screen sizes due to CSS flexbox layout.

## Files

- **index.html**: Main HTML file that structures the chatbot interface.
- **style.css**: CSS file for styling the chatbot interface, including colors, fonts, and animations.
- **script.js**: JavaScript file that handles user input, message matching, response retrieval, and animation.

## Setup

1. Clone or download the repository to your local machine.
2. Ensure all files (`index.html`, `style.css`, `script.js`) are in the same directory.
3. Open `index.html` in a web browser to view and interact with the chatbot interface.

## Usage

1. **Sending Messages**:
   - Type your message in the input field labeled "Type your message...".
   - Press the "Send" button or hit Enter to send your message to the chatbot.

2. **Receiving Responses**:
   - The chatbot will match your message with predefined questions.
   - If a match is found, it will display the corresponding answer.
   - If no match is found, it will prompt you to teach it a new response.
   - Basically, No AI- but it learns based on what it tells you

3. **Teaching the Chatbot**:
   - When prompted with "I don't know the answer, can you please teach me?", enter a new response.
   - The chatbot will learn this response for future queries.

4. **The Chat Bot uses smart answer Handeling**
   -If you were to type 'Hello', the chatbot at first would not know how to respond to it until you told it to answer 'hi there'. Now, after it learns that, even if you were to type variations like 'Hello there', 'Hellooo', or 'Hello friend', it would still answer based on those features.

## Notes

- The chatbot uses simple string matching for question recognition. Enhancements such as natural language processing (NLP) could improve accuracy.
- Customize the interface by modifying `style.css` to change colors, fonts, animations, etc.
- Extend functionality by updating the `knowledgeBase` object in `script.js` with more questions and answers.

## Conclusion
-Coding this chatbot was a fun experience. Of course, It could have not been possible with the help of Stack Overflow and some GPT assistance. I look forward to working on new projects!


 
