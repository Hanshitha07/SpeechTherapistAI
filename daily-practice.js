const promptArea = document.getElementById('prompt-box');


const prompts = {
  selfIntro: "Introduce yourself in 30 seconds. Talk about your name, what you do, and something unique about you.",
  storytelling: "Tell a short story about a funny or embarrassing moment from your life.",
  describeImage: "Describe an image in detail. Imagine you're helping someone visualize it without seeing it.",
  opinion: "What's your opinion on social media's impact on communication? Speak freely!"
};

function loadPrompt(type) {
  promptArea.innerHTML = `<p>${prompts[type]}</p>`;
}