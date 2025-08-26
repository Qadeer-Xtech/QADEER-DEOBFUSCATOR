document.addEventListener('DOMContentLoaded', () => {
    // UI ke hisson ko select karna
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const chatForm = document.getElementById('chat-form');

    // <<< ========================================================== >>>
    // <<<        YEH HAI HAMARE AI KA ASAL DIMAAG (THE KNOWLEDGE BASE)       >>>
    // <<< ========================================================== >>>
    // Yahan hum har sawal ke jawab ke liye rules likhenge.
    // Aap is list mein hazaron naye rules daal kar isay aur aqalmand bana sakte hain.
    const knowledgeBase = [
        // Greetings (Salam Dua)
        {
            keywords: ['hello', 'hi', 'salam', 'hey', 'salamun alaikum'],
            response: "Walaikum Assalam! Main Qadeer ka banaya hua AI hoon. Main aapki kya madad kar sakta hoon?"
        },
        // Introduction (Taaruf)
        {
            keywords: ['your name', 'kon ho', 'naam kya hai', 'who are you'],
            response: "Mera naam abhi tak rakha nahi gaya, lekin main Qadeer ka Personal AI Assistant hoon, jo sirf code par chalta hai."
        },
        // Creator (Banane Wala)
        {
            keywords: ['created you', 'banaya kisne', 'creator', 'developer'],
            response: "Mujhe Qadeer ne banaya hai, aapke sawalon ke jawab dene ke liye."
        },
        // How are you? (Kaise ho?)
        {
            keywords: ['how are you', 'kya haal', 'kaise ho', 'kesy ho'],
            response: "Main aik computer program hoon, isliye main hamesha theek rehta hoon. Aap sunayein?"
        },
        // Time (Waqt)
        {
            keywords: ['time', 'waqt', 'time kya hai'],
            response: () => `Abhi Lahore, Pakistan mein waqt hai: ${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi' })}`
        },
        // Date (Tareekh)
        {
            keywords: ['date', 'tareekh', 'din kya hai'],
            response: () => `Aaj tareekh hai: ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Karachi' })}`
        },
        // Capabilities (Salahiyat)
        {
            keywords: ['kya kar sakte ho', 'what can you do', 'features'],
            response: "Main aapke sawalon ke jawab de sakta hoon jo mere knowledge base mein mojood hain. Main waqt aur tareekh bhi bata sakta hoon."
        },
        // Thanks (Shukriya)
        {
            keywords: ['thanks', 'thank you', 'shukriya'],
            response: "Koi baat nahi! Khushi hui ke main aapke kaam aa saka."
        },
        // Farewell (Alvida)
        {
            keywords: ['bye', 'goodbye', 'allah hafiz', 'khuda hafiz'],
            response: "Aapse baat karke acha laga. Allah Hafiz!"
        }
        // Aap yahan naye rules add kar sakte hain...
        // {
        //     keywords: ['urdu keyword', 'english keyword'],
        //     response: "Aapka custom jawab."
        // }
    ];

    // Is function ka kaam message ko chat box mein dikhana hai
    const addMessage = (text, sender) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        messageElement.textContent = text;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    };

    // Yeh function user ke sawal ko samajh kar jawab dhoondta hai
    const getAIResponse = (inputText) => {
        const cleanInput = inputText.toLowerCase().trim();

        // Har rule ko check karna
        for (const rule of knowledgeBase) {
            // Har rule ke keywords ko check karna
            for (const keyword of rule.keywords) {
                if (cleanInput.includes(keyword)) {
                    // Agar jawab aik function hai (jaise waqt ke liye), to usay chalao
                    if (typeof rule.response === 'function') {
                        return rule.response();
                    }
                    // Warna seedha jawab de do
                    return rule.response;
                }
            }
        }
        
        // Agar koi rule match na ho to default jawab
        return "Maaf kijiye, main aapki baat nahi samajh saka. Aap apna sawal wazeh kar sakte hain?";
    };
    
    // User jab message bhejega to yeh function chalega
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userText = userInput.value.trim();
        if (userText === '') return;

        addMessage(userText, 'user');
        userInput.value = '';

        // AI ka jawab thore se delay ke baad dikhana, taake "thinking" feel aaye
        setTimeout(() => {
            const aiText = getAIResponse(userText);
            addMessage(aiText, 'ai');
        }, 500); // 0.5 second ka delay
    });

    // Shuruaat mein AI ko welcome message dena
    addMessage("Hello! Main aapka personal, code-based AI hoon. Poochiye!", 'ai');
});
