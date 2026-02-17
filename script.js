const ruBtn = document.getElementById("ruBtn");
const enBtn = document.getElementById("enBtn");

ruBtn.onclick = () => switchLang("ru");
enBtn.onclick = () => switchLang("en");

function switchLang(lang) {
  document.querySelectorAll("[data-ru]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  ruBtn.classList.toggle("active", lang === "ru");
  enBtn.classList.toggle("active", lang === "en");
}

function openModal(title) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
