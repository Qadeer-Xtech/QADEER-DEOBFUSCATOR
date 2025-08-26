// 'brain.js' se 'getAIResponse' function ko import karna
import { getAIResponse } from './core/brain.js';

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const chatForm = document.getElementById('chat-form');

const addMessage = (text, sender) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
};

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userText = userInput.value.trim();
    if (userText === '') return;

    addMessage(userText, 'user');
    userInput.value = '';

    // Sochne ki feeling dene ke liye thora delay
    setTimeout(() => {
        // Librarian (brain) se jawab hasil karna
        const aiText = getAIResponse(userText);
        addMessage(aiText, 'ai');
    }, 300);
});

// Shuruaati welcome message
addMessage("Assalam-o-Alaikum, main Qadeer Khan hoon. Poochiye, main aapki kya madad kar sakta hoon.", 'ai');
