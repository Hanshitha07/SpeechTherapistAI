// Speak the text using Web Speech API
function speakText() {
    const text = document.getElementById("textInput").value;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }
  
  // Start listening to user's voice
  function startListening() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();
  
    recognition.onresult = function(event) {
      const spokenText = event.results[0][0].transcript.toLowerCase();
      const expectedText = document.getElementById("textInput").value.toLowerCase();
  
      const resultElement = document.getElementById("result");
      if (spokenText === expectedText) {
        resultElement.innerHTML = `✅ Well done! You said: "${spokenText}"`;
        resultElement.style.color = "green";
      } else {
        resultElement.innerHTML = `❌ Oops! You said: "${spokenText}"<br>Expected: "${expectedText}"`;
        resultElement.style.color = "red";
      }
    };
  
    recognition.onerror = function(event) {
      alert("Error occurred: " + event.error);
    };
  }

  