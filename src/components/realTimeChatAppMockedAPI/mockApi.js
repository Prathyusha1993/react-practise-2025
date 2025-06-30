let messages = [
    {id:1, user:'Alice', text: 'Hi there', time: Date.now() - 5000},
    {id:2, user:'Bob', text:'Hello!', time: Date.now() - 3000},
];

export function fetchMessages() {
    return new Promise((resolve) => {
        setTimeout(() => resolve([...messages]), 500);
    });
}

export function sendMessage(user, text){
    const newMsg = {
        id: Date.now(),
        user, 
        text,
        time: Date.now(),
    };
    messages.push(newMsg);
    return new Promise((resolve) => {
        setTimeout(() => resolve(newMsg), 300);
    });
}