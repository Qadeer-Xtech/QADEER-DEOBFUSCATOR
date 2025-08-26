// knowledge directory se tamam "kitabon" ko import karna
import { greetings } from '../knowledge/greetings.js';
import { personal } from '../knowledge/personal.js';
import { utils } from '../knowledge/utils.js';
// import { tech } from '../knowledge/tech.js'; // Jab yeh files ban jayengi to inhein bhi import karen

// Tamam rules ko aik bari library mein jama karna
const knowledgeLibrary = [
    ...greetings,
    ...personal,
    ...utils,
    // ...tech,
];

// Yeh function user ke sawal ko samajh kar jawab dhoondta hai
export const getAIResponse = (inputText) => {
    const cleanInput = inputText.toLowerCase().trim().replace(/[?,]/g, '');

    for (const rule of knowledgeLibrary) {
        for (const keyword of rule.keywords) {
            // Hum check karenge ke user ke input mein keyword mojood hai ya nahi
            if (cleanInput.includes(keyword)) {
                // Agar jawab aik function hai, to usay chalao
                if (typeof rule.response === 'function') {
                    return rule.response(cleanInput);
                }
                // Warna seedha jawab de do
                return rule.response;
            }
        }
    }
    
    // Agar library mein koi rule match na ho
    return "Maaf kijiye, is silsile mein meri maloomat mehdood hai. Aap kuch aur pooch sakte hain.";
};
