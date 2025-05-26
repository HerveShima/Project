document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('active');
});
document.getElementById('reservation-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-message').textContent = "Thanks! Your table has been reserved.";
  this.reset();
});
// Show chat box when Chat button is clicked
document.getElementById("chatToggle").onclick = () => {
  document.getElementById("chatBox").style.display = "flex";
};

// Hide chat box when X is clicked
document.getElementById("closeChat").onclick = () => {
  document.getElementById("chatBox").style.display = "none";
};

// Simulated chat response
document.getElementById("chatForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("chatInput");
  const userMsg = input.value.trim();

  if (userMsg) {
    const chatMessages = document.getElementById("chatMessages");
    chatMessages.innerHTML += `<p class="user">${userMsg}</p>`;
    input.value = "";

    // Fake bot reply after 1 sec
    setTimeout(() => {
      chatMessages.innerHTML += `<p class="bot">Thanks for your message! We'll respond shortly. 😊</p>`;
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }
});
