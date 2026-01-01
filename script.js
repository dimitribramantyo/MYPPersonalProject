const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const interestFilter = document.getElementById("interestFilter");
const cards = document.querySelectorAll(".card");

function filterCards() {
  const search = searchInput ? searchInput.value.toLowerCase() : "";
  const type = typeFilter ? typeFilter.value : "all";
  const interest = interestFilter ? interestFilter.value : "all";

  cards.forEach(card => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    const cardType = card.dataset.type;
    const cardInterest = card.dataset.interest;

    const matchSearch = title.includes(search);
    const matchType = type === "all" || type === cardType;
    const matchInterest = interest === "all" || interest === cardInterest;

    card.style.display =
      matchSearch && matchType && matchInterest ? "block" : "none";
  });
}

if (searchInput) {
  searchInput.addEventListener("input", filterCards);
}

if (typeFilter) {
  typeFilter.addEventListener("change", filterCards);
}

if (interestFilter) {
  interestFilter.addEventListener("change", filterCards);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePopup();
    }
  });

function openPopup(title, description, eligibility, date, link) {
  document.getElementById("popupTitle").textContent = title;
  document.getElementById("popupDescription").textContent = description;
  document.getElementById("popupEligibility").textContent = eligibility;
  document.getElementById("popupDate").textContent = date;
  document.getElementById("popupLink").href = link;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
