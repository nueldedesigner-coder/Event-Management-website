# Event-Management-website
# Ayo — Campus Event Ticketing Platform

**Case Study 9 — Event Management System**

Ayo is a campus event ticketing web app where students discover and book tickets to events (concerts, hackathons, comedy nights, career fairs, etc.), and organizers can create and manage their own events. Visual/functional inspiration: [Tix Africa](https://tix.africa).

Built with **plain HTML, CSS, and JavaScript** — no frameworks, no build tools. Every page opens directly in a browser.

---

## 🔗 Live Demo

*(Enable GitHub Pages in repo Settings → Pages to get a live link here)*

## 📄 Pages

| Page | Description |
|---|---|
| `index.html` | Homepage — event discovery, search, category filters |
| `login.html` | Log in (email/password + Google sign-in UI) |
| `signup.html` | Sign up |
| `event-details.html` | Single event page with ticket tier picker |
| `checkout.html` | Attendee details + payment method |
| `order-confirmation.html` | Booking success + digital ticket |
| `create-event.html` | Organizer event creation form |

More pages (dashboard, manage events, attendees, my tickets) are in progress.

## 🎨 Design System

- **Colors:** deep ink background (`#14102B`), coral accent (`#FF6B35`), marigold accent (`#FFD23F`)
- **Fonts:** Sora (headings), Inter (body), IBM Plex Mono (data/dates/prices)
- **Signature motif:** torn ticket-stub styling on event cards and tickets

## 📁 Folder Structure

```
ayo-events/
├── index.html
├── login.html
├── signup.html
├── event-details.html
├── checkout.html
├── order-confirmation.html
├── create-event.html
├── css/
│   └── style.css
└── js/
    ├── script.js
    ├── auth.js
    ├── event-details.js
    ├── checkout.js
    ├── confirmation.js
    └── create-event.js
```

## 🚀 Running Locally

No build step required — just open any `.html` file in a browser. For best results, don't preview inside a code editor's built-in preview panel (some don't fully support responsive CSS); use a real browser like Chrome or Safari.

## 👥 Team

- Frontend: Nuel (Reg. No. 25/co/cs/059)
- Backend, Testing, Documentation: *(add teammates here)*

## 📚 Additional Docs

- `PROJECT-GUIDE.md` — architecture, workflow, page status
- `BACKEND-GUIDE.md` — API/data model spec for backend team
- `TESTING-AND-DOCS-GUIDE.md` — QA checklist + report structure
- 
