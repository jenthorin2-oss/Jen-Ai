const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(text, sender) {
    const message = document.createElement("div");
    message.classList.add("message", sender);
    message.textContent = text;

    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", () => {
    const text = userInput.value.trim();

    if (text === "") return;

    addMessage(text, "user");

    userInput.value = "";

    setTimeout(() => {
        addMessage("🤖 আমি এখনো ডেমো মোডে আছি। খুব শীঘ্রই OpenAI API-এর সাথে যুক্ত হব!", "bot");
    }, 500);
});

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendBtn.click();
    }
});