function sendMessage(){

let input = document.getElementById("userInput");
let message = input.value.toLowerCase();

let chatbox = document.getElementById("chatbox");

chatbox.innerHTML += `<div class="user">${message}</div>`;

let reply = getReply(message);

chatbox.innerHTML += `<div class="bot">${reply}</div>`;

input.value="";

chatbox.scrollTop = chatbox.scrollHeight;

}

function getReply(message){

if(message.includes("name"))
return "My name is Sunita Devi. I am a farmer from Salan Gaon.";

if(message.includes("work"))
return "I manage small terrace farms where I grow corn and mustard.";

if(message.includes("problem"))
return "Transporting crops to the market is very difficult for me.";

if(message.includes("goal"))
return "My goal is to increase my farm income and support my children's education.";

if(message.includes("hello"))
return "Namaste! You can ask me about my farming life.";

return "I am not sure about that, but farming life in my village is not easy.";

}
