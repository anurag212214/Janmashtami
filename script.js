const music = new Audio("Music 1.mp3");
music.loop = true;
music.volume = 0.45;
/* =========================
   JANMASHTAMI SURPRISE
========================= */

const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");
const letterSection = document.getElementById("letterSection");
const envelope = document.getElementById("envelope");
const petalsContainer = document.querySelector(".petals");


/* =========================
   START SURPRISE
========================= */

function startSurprise() {
music.play().catch(() => {});
 
   // Hide intro
  intro.style.opacity = "0";
  intro.style.transform = "scale(1.08)";

  setTimeout(() => {

    intro.style.display = "none";

    // Show main screen
    mainContent.style.display = "flex";

    // Flowers start falling
    startPetals();

  }, 900);
}


/* =========================
   OPEN LETTER
========================= */

function openLetter() {

  letterSection.style.display = "flex";

  // Small delay so opening animation works properly
  setTimeout(() => {
    envelope.classList.add("open");
  }, 250);

  // More flowers
  startPetals();
}


/* =========================
   CLOSE LETTER
========================= */

function closeLetter() {

  envelope.classList.remove("open");

  setTimeout(() => {
    letterSection.style.display = "none";
  }, 700);
}


/* =========================
   FLOATING FLOWERS
========================= */

function createPetal() {

  const petal = document.createElement("div");

  petal.classList.add("petal");

  const flowers = [
    "🌸",
    "🌺",
    "🌼",
    "✨",
    "💮"
  ];

  petal.innerHTML =
    flowers[Math.floor(Math.random() * flowers.length)];

  petal.style.left = Math.random() * 100 + "vw";

  const size = 14 + Math.random() * 14;

  petal.style.fontSize = size + "px";

  const duration = 5 + Math.random() * 5;

  petal.style.animationDuration = duration + "s";

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}


/* =========================
   START PETALS
========================= */

let petalsStarted = false;

function startPetals() {

  if (petalsStarted) return;

  petalsStarted = true;

  setInterval(() => {
    createPetal();
  }, 650);
}


/* =========================
   EXTRA HEART EFFECT
========================= */

document.addEventListener("click", function(event) {

  // Don't create effect when clicking buttons
  if (
    event.target.tagName === "BUTTON" ||
    event.target.closest("button")
  ) {
    return;
  }

  const heart = document.createElement("div");

  heart.innerHTML = "💙";

  heart.style.position = "fixed";
  heart.style.left = event.clientX + "px";
  heart.style.top = event.clientY + "px";
  heart.style.fontSize = "20px";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "100";

  document.body.appendChild(heart);

  heart.animate(
    [
      {
        transform: "translate(-50%, -50%) scale(.5)",
        opacity: 0
      },
      {
        transform: "translate(-50%, -100%) scale(1.2)",
        opacity: 1
      },
      {
        transform: "translate(-50%, -180%) scale(.8)",
        opacity: 0
      }
    ],
    {
      duration: 900,
      easing: "ease-out"
    }
  );

  setTimeout(() => {
    heart.remove();
  }, 900);

});


/* =========================
   PAGE LOAD
========================= */

window.addEventListener("load", () => {

  // Make sure the opening screen is visible
  intro.style.display = "flex";

  // Tiny welcome effect
  setTimeout(() => {
    intro.style.opacity = "1";
  }, 100);

});
function showSecret() {

  const secret = document.getElementById("secretMessage");
  const button = document.querySelector(".secret-btn");

  secret.classList.add("show");

  button.style.display = "none";

  // Extra magical flowers
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      createPetal();
    }, i * 120);
  }
}
