// Salam dua se mutalliq rules (expanded worldwide greetings/thanks/goodbye keywords)
export const greetings = [
    {
        keywords: [
            // English
            'hello','hi','hey','greetings','hiya','yo','sup','howdy',
            // Urdu/Arabic/Islamic
            'salam','salaam','salamun alaikum','assalam-o-alaikum','as-salamu alaykum','assalamu alaikum','asalam alaikum',
            // Other languages
            'hola','bonjour','ciao','hallo','namaste','konnichiwa','ni hao','privet','marhaba','shalom','hej','aloha',
            // Case variations (common)
            'Hello','Hi','HEY','SALAM','Assalam-o-Alaikum'
        ],
        response: "Walaikum Assalam! Jee, farmaye."
    },
    {
        keywords: [
            // Urdu/English
            'how are you','kya haal','kaise ho','kesy ho','haal chaal','how r u','whats up','wassup','sup',
            // Other language equivalents
            'comment ça va','como estas','wie gehts','kaifa haluk','konnichiwa genki','apa kabar',
            // Case variants
            'HOW ARE YOU','Kya Haal','Kaise Ho'
        ],
        response: "Alhamdulillah, main theek hoon. Shukriya. Aap sunayein?"
    },
    {
        keywords: [
            // English/Urdu
            'thanks','thank you','shukriya','mehrbani','thank u','thx','tnx','much obliged','gracias','merci','danke','shukran','arigato',
            // Case variants
            'THANK YOU','Shukriya','THX'
        ],
        response: "Koi baat nahi. Yeh mera farz hai."
    },
    {
        keywords: [
            // English/Urdu
            'bye','goodbye','allah hafiz','khuda hafiz','see you','see ya','take care','farewell',
            // Other language equivalents
            'adios','ciao','au revoir','ma as-salama','sayonara','do svidaniya',
            // Case variants
            'BYE','Allah Hafiz','GOODBYE'
        ],
        response: "Aap se baat karke acha laga. Allah Hafiz!"
    }
];
