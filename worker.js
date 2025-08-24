// Worker mein zaroori cheezain import karna
importScripts('https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.7/beautify.min.js');

// <<< ========================================================== >>>
// <<<           THE NEW GOOGLE AI-POWERED ENGINE                 >>>
// <<< ========================================================== >>>

// Main thread se message ka intezar karna
self.onmessage = async (event) => {
    const { code, useAI } = event.data;

    // Agar user ne "Deep Analysis" (ab AI mode) check nahi kiya, to sirf basic formatting karo
    if (!useAI) {
        const beautifiedCode = js_beautify(code, { indent_size: 4 });
        const finalResult = `// --- Formatted with Basic Beautifier --- \n\n${beautifiedCode}`;
        self.postMessage({ status: 'success', result: finalResult });
        return;
    }

    // Yahan apni Google AI Studio se hasil ki hui API Key daalen
    const API_KEY = 'AAPKI_GOOGLE_AI_API_KEY_YAHAN_DAALEN';

    if (API_KEY === 'AAPKI_GOOGLE_AI_API_KEY_YAHAN_DAALEN') {
         self.postMessage({ status: 'error', error: "API Key not found. Please add your Google AI API key in the 'worker.js' file." });
         return;
    }

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

    // AI ko bhejne ke liye aik behtareen prompt
    const prompt = `
        You are an elite JavaScript deobfuscation expert. Your task is to analyze the following obfuscated JavaScript code.
        1.  First, provide a clean, readable, and fully deobfuscated version of the code. Try to restore original variable and function names if possible.
        2.  After the code, add a multi-line comment block /* ... */ explaining the primary obfuscation techniques you identified (e.g., String Array, Hexadecimal Encoding, Control Flow Flattening, Dead Code Injection, etc.).

        Here is the obfuscated code:
        \`\`\`javascript
        ${code}
        \`\`\`
    `;

    try {
        self.postMessage({ status: 'processing', message: 'AI is analyzing the code...' });

        // Google AI ko API request bhejna
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
            }),
        });

        if (!response.ok) {
            throw new Error(`Google AI API request failed with status: ${response.status}`);
        }

        const data = await response.json();
        
        // AI ke jawab se code nikalna
        const aiResponseText = data.candidates[0].content.parts[0].text;

        // Code ko ```javascript ... ``` block se nikalna
        const codeBlock = aiResponseText.match(/```javascript\n([\s\S]*?)\n```/);
        
        let finalCode = aiResponseText;
        if(codeBlock && codeBlock[1]) {
            finalCode = codeBlock[1];
        } else {
            // Agar code block na mile to poora jawab hi dikha do
            console.warn("Could not find a formatted code block in the AI response.");
        }

        self.postMessage({ status: 'success', result: finalCode });

    } catch (error) {
        self.postMessage({ status: 'error', error: error.message });
    }
};
