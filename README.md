# Profile Card + Stage 1

Hi, this repo started as a compact profile card and now includes two extra pages for the Stage 1 task: an About page and a Contact page with accessible form validation. The project focuses on simple, semantic HTML, accessible markup, and a responsive layout that works well on phones and desktops.

## What you'll find here

- `index.html` — the profile card (avatar, name, bio, hobbies).
- `about.html` — a short, reflective About Me page (bio, goals, areas to improve, note to future self).
- `contact.html` — a Contact Us page with client-side form validation and clear ARIA associations.
- `style.css` — shared styles for the whole site (layout, header, card styles).
- `about.css`, `contact.css` — small page-specific styles.
- `script.js` — small helpers used on the profile card (live time, accessibility helpers).
- `contact.js` — form validation for the Contact page.
- `nav.js` — mobile-friendly header navigation behavior.

## Key features and accessibility

- Semantic markup: `main`, `section`, `article`, `figure`, and proper headings.
- Accessible forms: every input has a `<label>` and errors are linked via `aria-describedby`.
- Keyboard friendly: focus styles and keyboard navigation supported throughout.
- Responsive: header collapses into a hamburger menu on small screens and pages scale to various widths.
- Test-friendly attributes: key elements include `data-testid` attributes used by automated checks.

## Author

- Joshua Kolawole (De King)
- Frontend Developer | QA Engineer | Graphic Designer
- [Email Me: kolawolejoshua459@gmail.com](mailto:kolawolejoshua459@gmail.com)  
- [LinkedIn](https://www.linkedin.com/in/joshua-kolawole-40062a287/) | [GitHub](https://github.com/kingkreation)


## Contact form validation rules

- All fields are required.
- Email must be a valid address (basic client-side check).
- Message must be at least 10 characters.
- On successful submit a confirmation message is shown (and the form resets).

## Quick local preview

You don't need anything fancy, just open the files in your browser. From a terminal:

```powershell
git clone https://github.com/kingkreation/HNG_Stage_0.git
cd HNG_Stage_0
# Open the HTML files in your browser (Windows) — double-click or use `start`:
start index.html
```

If you'd rather serve the files from a tiny HTTP server (recommended for consistent link behavior):

```powershell
# If you have Python 3 installed
python -m http.server 8000
# then open http://localhost:8000/index.html
```

## Automated test hints

- Look for the `data-testid` attributes when writing tests.
- The profile time uses `Date.now()` and updates regularly so tests can read a stable millisecond value.

---

⭐ *If you like this project, consider giving it a star on GitHub!*  
💡 *Built with passion, curiosity, and purpose.*


---


