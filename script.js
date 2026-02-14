const flowers = Array.from(document.querySelectorAll(".flower"));
const btn = document.getElementById("bloomBtn");
const overlay = document.querySelector(".petal-overlay");
const sparkleOverlay = document.querySelector(".sparkle-overlay");
const msg = document.getElementById("msg");
function typeMessage(text) {
  let i = 0;
  msg.textContent = "";
  const interval = setInterval(() => {
    msg.textContent += text[i] === "\n" ? "\n" : text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 28);
}
function bloom() {
  let anyBloomed = flowers.some(f => f.classList.contains("bloom"));
  if (anyBloomed) return;
  flowers.forEach((f, i) => {
    setTimeout(() => f.classList.add("bloom"), i * 250);
  });
  btn.textContent = "A bouquet for you";
  btn.disabled = true;
  spawnPetals();
  setTimeout(() => typeMessage(msg.dataset.full), 900);
}
function spawnPetals() {
  const colors = ["#ff6699", "#ff9a5f", "#7aa9ff", "#e65f8d"];
  for (let i = 0; i < 28; i++) {
    const el = document.createElement("span");
    el.className = "petal-piece";
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = (-10 - Math.random() * 20) + "px";
    el.style.setProperty("--dur", 6 + Math.random() * 6 + "s");
    el.style.setProperty("--delay", Math.random() * 2 + "s");
    el.style.setProperty("--petal-color", colors[Math.floor(Math.random() * colors.length)]);
    overlay.appendChild(el);
  }
}
function spawnSparkles() {
  for (let i = 0; i < 18; i++) {
    const s = document.createElement("span");
    s.className = "sparkle";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    s.style.setProperty("--t-dur", 1.8 + Math.random() * 1.8 + "s");
    s.style.setProperty("--t-delay", Math.random() * 2 + "s");
    sparkleOverlay.appendChild(s);
  }
}
btn.addEventListener("click", bloom);
setTimeout(bloom, 1000);
spawnSparkles();
