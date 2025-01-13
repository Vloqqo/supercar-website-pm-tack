import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "ADD LOCALLY DONT PUSH WITH API KEY";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

let messages = {
    history: [],
  };

async function sendMessage() {
    const userMessage = document.querySelector(".concierge-inputarea input").value;

    if (userMessage.length) {
        document.querySelector(".concierge-inputarea input").value = "";
        document.querySelector(".concierge-chat").insertAdjacentHTML("beforeend", `
            
            <section class="concierge right-concierge">

            <section class="concierge-bubble">
                <section class="concierge-info">
                    <section class="concierge-info-name">
                        <h3>XXXXX</h3>
                    </section>
                    <section class="concierge-info-time">
                        <h4>5:07</h4>
                    </section>
                </section>

                <section class="concierge-text">
                    <p>${userMessage}</p>
                    </section>
                    </section>
                    `);

                    const chat = model.startChat(messages);
                      let result = await chat.sendMessage(userMessage);
                      document.querySelector(".concierge-chat").insertAdjacentHTML("beforeend", `
            
                        <section class="concierge left-concierge">
            
                        <section class="concierge-bubble">
                            <section class="concierge-info">
                                <section class="concierge-info-name">
                                    <h3>XXXXX</h3>
                                </section>
                                <section class="concierge-info-time">
                                    <h4>5:07</h4>
                                </section>
                            </section>
            
                            <section class="concierge-text">
                                <p>${result.response.text()}</p>
                                </section>
                                </section>
                                `);

                                messages.history.push({
                                    role: "user",
                                    parts: [{ text: userMessage}],
                                });

                                messages.history.push({
                                        role: "model",
                                        parts: [{ text: result.response.text() }],
                                });

                      console.log(result.response.text());
    }
}

document.querySelector(".concierge-inputarea button").addEventListener("click", () => sendMessage());
