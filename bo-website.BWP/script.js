const root = document.documentElement;

const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);

function updateThemeIcon() {
  const isLight = root.getAttribute("data-theme") === "light";
  themeBtn.textContent = isLight ? "🌙" : "☀️";
}
updateThemeIcon();

themeBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "light" ? "" : "light";
  if (next) root.setAttribute("data-theme", next);
  else root.removeAttribute("data-theme");

  localStorage.setItem("theme", next || "");
  updateThemeIcon();
});

// Features modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".feature").forEach(btn => {
  btn.addEventListener("click", () => {
    modalTitle.textContent = btn.dataset.title;
    modalText.textContent = btn.dataset.text;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    closeModal.focus();
  });
});

function hideModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}
closeModal.addEventListener("click", hideModal);
modal.addEventListener("click", (e) => { if (e.target === modal) hideModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") hideModal(); });

// Contact form demo submit
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  statusEl.textContent = "✅ Verstuurd (demo). Bedankt!";

  // Clear after a moment (demo)
  setTimeout(() => {
    form.reset();
    statusEl.textContent = "";
  }, 2500);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();