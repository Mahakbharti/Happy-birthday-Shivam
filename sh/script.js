// Typing Effect
const typingText = document.querySelector(".typing-text");
const message = "May this year bring you lots of love, joy & success! 🎂✨";
let index = 0;

function type() {
  if (index < message.length) {
    typingText.textContent += message.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

// Popup + Start typing
window.onload = function() {
  alert("🎂 Happy Birthday Shivam! 🎂\nWishing you lots of joy, love, and success!");
  type();

  // Play music (for browsers that need interaction)
  const music = document.getElementById("bg-music");
  music.volume = 0.4; // soft volume
  music.play().catch(() => {
    console.log("Autoplay blocked, will play on user interaction.");
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
};

// Show secret message when gift is clicked
function showSecret() {
  document.getElementById("secretMessage").classList.toggle("hidden");
  createConfetti();
}

// Confetti effect 🎉
function createConfetti() {
  for (let i = 0; i < 30; i++) {
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);

    let size = Math.random() * 10 + 5 + "px";
    confetti.style.width = size;
    confetti.style.height = size;
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => { confetti.remove(); }, 5000);
  }
}
