import { pipeline } from '@xenova/transformers';

// UI ke hisson ko select karna
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const chatForm = document.getElementById('chat-form');
const sendBtn = document.getElementById('send-btn');
const statusDisplay = document.getElementById('status');

// Is function ka kaam message ko chat box mein dikhana hai
const addMessage = (text, sender) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
    // Scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
    return messageElement; // Return element to update it live
};

// Main AI function
const main = async () => {
    // Shuruaat mein AI ko welcome message dena
    addMessage("Hello! I am your personal AI. How can I help you today?", 'ai');

    // AI model ko load karna. Yeh aik text generation model hai.
    // Yeh process user ke internet speed par depend karega.
    statusDisplay.textContent = 'Loading AI Model (~50MB)... This may take a moment.';
    const generator = await pipeline('text-generation', 'Xenova/distilgpt2');
    statusDisplay.textContent = 'AI is Ready!';

    // Input aur button ko enable karna jab model load ho jaye
    userInput.disabled = false;
    sendBtn.disabled = false;
    userInput.placeholder = "Ask your AI something...";
    
    // User jab message bhejega to yeh function chalega
    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Page ko reload hone se rokna
        const userText = userInput.value.trim();
        if (userText === '') return;

        // User ka message screen par dikhana
        addMessage(userText, 'user');
        
        // Input ko khali karna aur disable karna jab tak AI jawab de
        userInput.value = '';
        userInput.disabled = true;
        sendBtn.disabled = true;
        
        // AI ka message dikhane ke liye aik khali element banana
        const aiMessageElement = addMessage('Thinking...', 'ai');

        // AI se jawab generate karwana
        // `stream` ki wajah se jawab lafz-ba-lafz (word-by-word) aayega
        const stream = await generator(userText, {
            max_new_tokens: 100,
            temperature: 0.7,
            repetition_penalty: 1.2,
            early_stopping: true,
        });

        // Lafz-ba-lafz jawab ko screen par update karna
        let fullResponse = '';
        for await (const token of stream) {
            fullResponse += token.generated_text;
            aiMessageElement.textContent = fullResponse;
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        // Jab jawab mukammal ho jaye to input ko dobara enable karna
        userInput.disabled = false;
        sendBtn.disabled = false;
        userInput.focus();
    });
};

// Main function ko call karna
main();
