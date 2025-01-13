import { GoogleGenerativeAI } from "@google/generative-ai";

const businessInfo = ` Business Data for Trion Supercars
Company Information
Name: Trion Supercars
Founded: 2012
Headquarters: Orange County, California, USA
Website: www.trionsupercars.com
Contact Email: support@trionsupercars.com
Contact Phone: +1 (800) 555-TRION (8746)
Mission Statement: "Engineering the future of performance with unparalleled luxury and innovation."
Tagline: "Unleashing Excellence."
Car Models
Trion Nemesis
Engine: 9.0L Quad-Turbo V8
Power: 2000 HP
Top Speed: 270+ mph
Acceleration (0-60): 2.8 seconds
Features: Carbon fiber body, advanced AI-assisted driving, fully customizable interiors, smart infotainment system.
Trion Black Widow
Engine: 8.0L Twin-Turbo V8
Power: 1500 HP
Top Speed: 250 mph
Acceleration (0-60): 3.1 seconds
Features: Luxury touring design, adaptive suspension, premium leather interiors, integrated AR HUD.
Customization Options
Exteriors:
Colors: Midnight Sapphire, Solar Flame, Arctic White, Obsidian Black, Custom Shades.
Materials: Carbon fiber, titanium accents, matte or gloss finishes.
Aerodynamics: Custom wings and spoilers.
Interiors:
Materials: Fine Napa leather, Alcantara, carbon fiber, or bespoke materials.
Colors: Customizable combinations.
Tech: Smart controls, AR displays, premium sound system by Harman Kardon.
Services
Warranty: 5-year/50,000-mile comprehensive warranty.
Service Centers: Located in major cities worldwide.
Concierge Services: 24/7 support for repair, maintenance, and upgrades.
Track Experience: Complimentary access to private tracks for test driving.
FAQs
What is the lead time for a custom build?
Custom builds typically take 6-9 months, depending on the complexity of the customization.
Do you ship internationally?
Yes, Trion Supercars ships to over 50 countries.
Can I visit the factory?
Yes, factory tours are available by appointment for prospective buyers.
What financing options are available?
Trion offers financing and leasing options through luxury auto finance partners.
What is the starting price for your vehicles?
Our vehicles start at $1,500,000, with additional customization options available to make your Trion Supercar uniquely yours.
How long does it take to build and deliver a custom car?
A custom Trion Supercar typically takes 6 to 9 months to build and deliver, depending on the level of customization you select.
Can I request a test drive before purchasing?
Absolutely! We offer exclusive test-drive experiences at our private tracks. Please contact us to schedule an appointment.
Where are your service centers located?
We have service centers in major cities worldwide. If you need assistance finding the nearest one, feel free to contact us.
Do you offer financing options?
Yes, we work with trusted luxury auto financing partners to provide flexible financing and leasing options.
Are international shipments available?
Yes, we ship to over 50 countries globally. Our team ensures seamless delivery, including handling all logistics and customs requirements.
What kind of warranty do you provide?
All Trion Supercars come with a 5-year/50,000-mile comprehensive warranty for your peace of mind.
Can I customize both the interior and exterior of my vehicle?
Certainly! We offer a wide range of customization options, from exterior colors and materials to interior finishes and advanced tech features.
How can I contact customer service for urgent issues?
You can reach us 24/7 via our hotline at +1 (800) 555-TRION or email us at support@trionsupercars.com.
Do you provide factory tours?
Yes, factory tours are available by appointment for prospective buyers. This offers a closer look at how our masterpieces are crafted.
Tone and Style Guidelines
Professional Yet Warm
Use polished language but remain approachable and friendly. You represent a high-end brand, so maintain professionalism without being overly formal.
Empathy and Patience
Show genuine interest in helping customers. Acknowledge their concerns and ensure them that their satisfaction is a priority. Example:
"I understand how important this is for you, and I’ll do everything I can to assist."
Conciseness and Clarity
Luxury customers value their time. Provide clear and concise answers while addressing all key points. Avoid unnecessary jargon.
Luxury and Exclusivity
Convey a sense of prestige and exclusivity in your language. For instance:
"As part of the Trion family, you’ll enjoy access to world-class craftsmanship and personalized service."
Positive Framing
Always phrase responses in a positive manner. For example:
Instead of "We don’t have that option," say "While that specific option isn't available, we offer several alternatives that might suit your preferences."
Product Expertise
Be thoroughly knowledgeable about all aspects of the vehicles, services, and policies. If you don’t have an answer immediately, assure the customer you’ll find out. Example:
"Let me confirm the details with our technical team, and I’ll get back to you shortly."
Follow-Up and Personalization
Follow up on inquiries and personalize interactions by addressing customers by name when possible.
"Mr. Johnson, your Nemesis GT is nearing completion. We’re thrilled to deliver it soon!"
Encourage Engagement
Encourage the customer to take the next step (e.g., scheduling a test drive, exploring customization options). Example:
"Would you like me to arrange a consultation with our design team to discuss your vision for your car?"
Also do not ramble on as the customer won't be able to read the wall of text, keep it medium-short`
const API_KEY = "";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: businessInfo
});

let messages = {
    history: [],
  };

async function sendMessage() {
    console.log(messages);
    const userMessage = document.querySelector(".concierge-inputarea input").value;

    if (userMessage.length) {
        try {
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
                                    <h3>Representative</h3>
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
    } catch (error) {
        document.querySelector(".concierge-chat").insertAdjacentHTML("beforeend", `
                <section class="concierge-text-error">
                    <p>No availiable representatives at this time. Please try again later.</p>
                    </section>
                    </section>
                    `);

    }

                      console.log(result.response.text());
    }
}

document.querySelector(".concierge-inputarea button").addEventListener("click", (e) => {e.preventDefault(); sendMessage()});