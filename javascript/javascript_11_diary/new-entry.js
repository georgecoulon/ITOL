const form = document.querySelector(".entry-form");
const saveButton = document.querySelector(".save-button");

saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  const titleInput = document.querySelector("#entry-title");
  const bodyInput = document.querySelector("#entry-body");

  const title = titleInput.value;
  const body = bodyInput.value;

  // Get any existing entries from localStorage.
  // If there aren't any yet, start with an empty array.
  const entries =
    JSON.parse(localStorage.getItem("entries")) || [];

  const newEntry = {
    title: title,
    body: body,
    date: new Date().toLocaleDateString()
  };

  entries.push(newEntry);

  localStorage.setItem("entries", JSON.stringify(entries));

  console.log("Entry saved:", newEntry);
  console.log("All entries:", entries);

  form.reset();
});
