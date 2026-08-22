**The Digital Vellum**

The Digital Vellum is a multi-page digital diary built using HTML, CSS and JavaScript. It allows users to write personal reflections, save them in their browser and view their previous entries.

The project focuses on responsive layout, navigation between multiple HTML pages, DOM manipulation and persistent browser storage.

**Screenshot**

![Alt text](/diary_screenshot.jpg?raw=true "Diary Screenshot")

**Features**
- Responsive diary interface built with CSS Grid and Flexbox
- Three separate pages connected using standard HTML links
- Form for creating new diary entries
- Entries saved between browser sessions using localStorage
- Five most recent entries displayed on the home page
- Full archive of entries displayed in the Vault
- Dynamic content generated using JavaScript and DOM manipulation

**Pages**

**Home — index.html**

The home page displays the user's five most recent diary entries as cards. The entries are generated dynamically from the data stored in localStorage.

**New Entry — new-entry.html**

The New Entry page contains a form with a title input and reflection textarea.

JavaScript reads the values entered into these fields and creates an entry object containing the title, body and date. The entry is then added to the existing entries array and saved to localStorage.

**Vault — vault.html**

The Vault retrieves the complete entries array and dynamically displays every saved reflection as a full-width row. Unlike the home page, the Vault does not limit the number of entries displayed.

**Logic**

When a new entry is saved, I add it to the end of the entries array using:

entries.push(newEntry);

This means the newest entries are located at the end of the array.

On the home page, I first retrieve the entries from localStorage, and then select the last five entries and reverse their order:

const recentEntries = entries.slice(-5).reverse();

slice(-5) creates a new array containing a maximum of the final five entries. Because the newest entry is at the end of the original array, I use reverse() so that the newest reflection is displayed first.

For example, if the entries array contains:

Entry 1

Entry 2

Entry 3

Entry 4

Entry 5

Entry 6

Entry 7

the home page displays:

Entry 7

Entry 6

Entry 5

Entry 4

Entry 3

The Vault uses a similar approach but does not use slice(), so every saved entry is displayed.

**Using localStorage**

The project uses the browser's Web Storage API to make diary entries persist between page loads and browser sessions.

localStorage stores values as strings, so the entries array cannot be stored directly. Before saving it, I convert the JavaScript array into a JSON string.

When the data is needed again, I retrieve the string and convert it back into a JavaScript array, ensuring that it deals with the case when there are no saved entries yet.

localStorage provides storage associated with the document's origin and its data is preserved across browser sessions.

MDN Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

**Technologies Used**
HTML5
CSS3
JavaScript
CSS Grid
Flexbox
DOM Manipulation
Web Storage API
JSON

**What I Learned**

This project helped me understand how JavaScript can be used to turn a static website into an interactive application. In particular, I learned how to retrieve values from HTML forms, create JavaScript objects, work with arrays, manipulate the DOM and dynamically generate HTML.
