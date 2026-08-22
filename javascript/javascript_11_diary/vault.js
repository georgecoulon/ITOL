const vaultList = document.querySelector("#vault-list");

const entries =
  JSON.parse(localStorage.getItem("entries")) || [];

// Show newest entries first
const allEntries = entries.slice().reverse();

vaultList.innerHTML = "";

if (allEntries.length === 0) {
  vaultList.innerHTML = `
    <div class="empty-message">
      <h2>Your vault is empty.</h2>
      <p>Your saved reflections will appear here.</p>
      <a href="new-entry.html">Write your first entry</a>
    </div>
  `;
} else {
  allEntries.forEach(function (entry) {
    const vaultEntry = document.createElement("article");

    vaultEntry.classList.add("vault-entry");

    vaultEntry.innerHTML = `
      <div class="vault-entry-top">
        <div>
          <div class="vault-meta">
            <span>${entry.date}</span>
            <span class="vault-tag">Reflection</span>
          </div>

          <h2>${entry.title}</h2>
        </div>

        <button class="more-button" aria-label="More options">
          •••
        </button>
      </div>

      <p>${entry.body}</p>
    `;

    vaultList.appendChild(vaultEntry);
  });
}
