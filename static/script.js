// Simulate loading the knowledge base from a JSON file
let knowledgeBase = {
    "questions": []
};

// Function to find the best match for user input
function findBestMatch(userQuestion, questions) {
    let bestMatch = null;
    let highestScore = 0;

    questions.forEach(question => {
        let score = 0;
        const words = question.split(' ');
        words.forEach(word => {
            if (userQuestion.includes(word)) {
                score++;
            }
        });

        if (score > highestScore) {
            highestScore = score;
            bestMatch = question;
        }
    });

    return bestMatch;
}

// Function to get answer for a question from knowledge base
function getAnswerForQuestion(question, knowledgeBase) {
    for (let q of knowledgeBase.questions) {
        if (q.question === question) {
            return q.answer;
        }
    }
    return null;
}

// Function to add a message to the chat interface
function addMessage(sender, text) {
    const messages = document.getElementById('messages');
    const messageElement = document.createElement('li');
    messageElement.textContent = text;
    messageElement.classList.add('message', sender);
    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight;
}

// Function to handle sending user message and receiving bot response
function sendMessage(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const input = document.getElementById('message-input');
    const message = input.value.trim(); // Trim whitespace

    if (!message) return; // Do nothing if input is empty

    addMessage('user', message); // Add user message to chat

    const bestMatch = findBestMatch(message, knowledgeBase.questions.map(q => q.question));
    let response = "I don't know the answer, can you please teach me?";

    if (bestMatch) {
        response = getAnswerForQuestion(bestMatch, knowledgeBase) || response;
    }

    addMessage('bot', response); // Add bot response to chat

    if (response === "I don't know the answer, can you please teach me?") {
        const newAnswer = prompt("Faiz AI is asking for the answer"); // Prompt for new answer
        if (newAnswer) {
            knowledgeBase.questions.push({ question: message, answer: newAnswer });
            addMessage('bot', 'Thank you, I learned a new response!');
        }
    }

    input.value = ''; // Clear input field after processing
}

// Event listener for Send button click
document.getElementById('send-btn').addEventListener('click', sendMessage);

// Event listener for form submission prevention and Enter key press in input field
document.getElementById('message-form').addEventListener('submit', sendMessage);
