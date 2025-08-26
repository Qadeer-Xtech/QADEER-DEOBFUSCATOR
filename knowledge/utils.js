// Dynamic utilities, jaise waqt aur tareekh
export const utils = [
    {
        keywords: ['time', 'waqt', 'time kya hai'],
        response: () => `Is waqt Lahore mein time hai: ${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi', hour12: true })}`
    },
    {
        keywords: ['date', 'tareekh', 'din kya hai'],
        response: () => `Aaj tareekh hai: ${new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Karachi' })}`
    }
];
