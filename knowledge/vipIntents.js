// vipIntents.js
// EXTREMELY EXTENDED keywords for AI intents with misspellings, slang, emoji triggers, and multiple languages

export const vipIntents = [
    {
        intent: 'general_questions',
        keywords: [
            // English common Q
            'what is','whats','whts','wat is','wht iz','whatz','wtf is',
            'who is','who r','hu iz','whos','whose','whu',
            'where is','whr','wherz','whrz','wer iz',
            'when is','whn','wen','wenz',
            'why is','y is','y iz','wai',
            'how','hw','hao','hau','h0w',
            // Misspellings + Slang
            'wht','wat','whu','waz','whut','whutzz','sup?',
            '???','??','?','pls tell','plz explain','plz hlp',
            // Emojis & shorthand
            '❓','🤔','🤨','???','🙄'
        ],
        response: "Aap ka sawal samajh aaya. Kripya wazahat karein."
    },
    {
        intent: 'greetings_informal',
        keywords: [
            'yo','sup','suuup','wazzup','wassup','wsup','wsp','waddup','heyy','heyyy','hai','haii',
            'halo','helo','helloo','hii','hiii','hiiii',
            'gm','good morn','good mrng','gud mrng','good morning','gud mrnng',
            'ga','good aftn','good afternoon',
            'gn','good nite','gud nite','nite nite','good night',
            'aslm','slam','slm','slmz',
            // Emojis
            '👋','🙋','🙌','🙏'
        ],
        response: "Hello! Kaise ho? Main madad ke liye haazir hoon."
    },
    {
        intent: 'thanks_appreciation',
        keywords: [
            'thanks','thanx','thnx','tnx','tq','tx','ty','thankyou','thank u','tysm','tyvm',
            'gracias','merci','shukriya','shukran','danke','arigato','xiexie',
            'meherbani','bohot shukriya','jazakallah','jazak allah',
            // Misspellings
            'thx','tahnks','thansk','tanks',
            // Emojis
            '🙏','🤝','🙌','💐','❤️'
        ],
        response: "You're most welcome! 😊"
    },
    {
        intent: 'farewell_informal',
        keywords: [
            'bye','byee','byeee','goodbye','gudbye','bbye','bb','cya','see ya','see you','laters',
            'allah hafiz','khuda hafiz','fi amanillah','take care','tc','laterzz','gnite',
            'adios','ciao','au revoir','sayonara','do svidaniya',
            // Misspellings
            'gud bye','byeeeee','bie','bey','bi',
            // Emojis
            '👋','✋','🤚','🙋‍♂️','🙋‍♀️'
        ],
        response: "Bye! Apna khayal rakhna. 😊"
    },
    {
        intent: 'help_requests',
        keywords: [
            'help','hlp','halp','assist','asist','pls help','plz hlp','madad','madat',
            'need support','i need help','sos','emergency','urgent','req help',
            'help me','hlp me','hlppp','help pls','hlp asap',
            // Emojis
            '🆘','🚨','❗','‼️'
        ],
        response: "Bilkul! Batayein kis cheez mein madad chahiye?"
    },
    {
        intent: 'random_smalltalk',
        keywords: [
            'lol','lmao','rofl','haha','hehe','hehehe','hahaha','omg','wtf','idk','ikr',
            'kya kar rahe','kya kr rhe','ky kr rhy','whatcha doin','wyd','sup man','sup bro',
            'miss u','mis u','i miss u','luv u','love u','i luv u',
            '😂','🤣','😅','🤪','😜'
        ],
        response: "Aap ka mood acha lag raha hai! 😄"
    }
];

// Note: Ye sirf sample hai, aap aur intents aur keywords add kar ke ise aur bhi bada bana sakte hain.
