# WEB103 Prework - 💫 Creatorverse

Submitted by: **Anirudh Prashant Kalghatkar**

## About this web app

**Creatorverse** is a simple React web app to manage and explore your favorite content creators.  
Users can view, add, edit, and delete creators — each with a name, YouTube link, description, and optional image.  
Data is stored and managed using Supabase as a backend service.

## Time spent

**10** hours

---

## ✅ Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

---

## ⭐ Optional Features

The following **optional** features are implemented:

- [x] **Picocss is used to style HTML elements**
- [x] **The content creator items are displayed in a creative format, like cards instead of a list**
- [x] **An image of each content creator is shown on their content creator card**

---

## 🔧 Additional Features

- [x] Used Supabase as a backend-as-a-service for storing, querying, and updating data securely
- [x] Used unique `name` instead of `id` as primary identifier
- [x] Used Lucide icons for a clean edit UI
- [x] Used dynamic routing with React Router (`/creator/:name`, `/edit/:name`)
- [x] Cards are clickable to view details, with inline edit access

---

## 🎥 Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿 ![Video Walkthrough](http://i.imgur.com/link/to/your/gif/file.gif)

> GIF created with **ScreenToGif**

---

## 📝 Notes

Some challenges I faced:

- Handling updates based on `name` (as a primary key) instead of `id` meant encoding URL params carefully.
- Supabase requires `eq('name', value)` for querying, and `name` must be unique.
- Styling clickable cards while maintaining functional buttons (like edit) required `e.stopPropagation()` in React.

Overall, this was a great exercise in integrating a frontend (React) with a real backend (Supabase) and practicing full CRUD workflows.

---

## 📄 License

