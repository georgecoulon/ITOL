const reflectionGrid = document.querySelector("#reflection-grid");

const entries =
  JSON.parse(localStorage.getItem("entries")) || [];

// Get only the five most recent entries
const recentEntries = entries.slice(-5).reverse();

reflectionGrid.innerHTML = "";

if (recentEntries.length === 0) {
  reflectionGrid.innerHTML = `
    <div class="empty-message">
      <h2>No reflections yet.</h2>
      <p>Your saved entries will appear here.</p>
      <a href="new-entry.html">Write your first entry</a>
    </div>
  `;
} else {
  recentEntries.forEach(function (entry, index) {
    const card = document.createElement("article");

    card.classList.add("entry-card");

    if (index === 0) {
      card.classList.add("entry-card-large");
    } else if (index === 3) {
      card.classList.add("entry-card-medium");
    } else if (index === 4) {
      card.classList.add("entry-card-wide");
    } else {
      card.classList.add("entry-card-small");
    }

    card.innerHTML = `
      <p class="entry-date">${entry.date}</p>

      <h2>${entry.title}</h2>

      <p class="entry-preview">
        ${entry.body}
      </p>

      <div class="entry-tags">
        <span>Reflection</span>
      </div>
    `;

    reflectionGrid.appendChild(card);
  });
}
