const chatBtn = document.querySelector("#button");
const chatFull = document.querySelector("#chatContainer");
const chatArea = document.querySelector("#chatArea");
const sendBtn = document.querySelector("#sendBtn");
const userBox = document.querySelector("#userInput");
const chatBot = document.querySelector("#botMessage");

//exibe o chat
chatBtn.addEventListener("click", function showChat() {
    let chatOpen = chatFull.classList.toggle("show-menu");
    setTimeout (() => {
        if(document.querySelector(".show-menu")) {
            firstMessageBot();
        }
        else {
            chatArea.innerHTML = "";
        }  
    }, 300);
});

//primeira mensagem bot
function firstMessageBot() {
    let firstMessage = "Boas vindas, como posso ajudar?</br> 1 - Informações</br> 2- Sair";
    let firstBotMsg = '<div class="bot-message" id="botMessage"><p>' + firstMessage + '</p></div>';
    chatArea.insertAdjacentHTML("beforeend", firstBotMsg);
};

//enviar mensagem e chamar 
sendBtn.addEventListener("click", () => {
    let userMessage = userBox.value;
    sendText(userMessage);
    sendBotText(userMessage);
});

//enviar com o enter
userBox.addEventListener("keypress", (e) => {
    if(e.keyCode === 13) {
        sendBtn.click();
        e.preventDefault();
    }
});

//enviar msg do usuario
function sendText(userMessage) {
    let userHtml = '<div class="user-message" id="userMessage"><p>' + userMessage + '</p></div>';
    chatArea.insertAdjacentHTML('beforeend', userHtml); 
    userBox.value = "";
};

//enviar msg bot
function sendBotText(userMessage) {
    let botResponse = getResponse(userMessage);
    let botText = '<div class="bot-message" id="botMessage"><p>' + botResponse + '</p></div>';
    setTimeout (() => {
        chatArea.insertAdjacentHTML('beforeend', botText);
        scroll();
    } , 400);
};

//descer Scroll
function scroll() {
    chatArea.lastElementChild.scrollIntoView({behavior: "smooth", block: "end"});
};