# CV Application

A dynamic, client-side **CV/Resume Generator** built with React and hosted on Netlify.

👉 [Live Demo](https://cvapplicationmain.netlify.app/)

---

## 🚀 Features

- Add personal information, education, and work experience
- Live CV preview updates as you type
- Toggle between edit and preview modes
- Download/print CV using browser's print dialog
- Responsive and clean design

---

## 🖥️ Tech Stack

React (with Hooks)
JavaScript (ES6+)
CSS (Modular/Global)
Netlify for hosting

---

## 📂 Folder Structure

```plaintext
src/
├── components/
│ ├── PersonalInfo.jsx
│ ├── Education.jsx
│ ├── Experience.jsx
│ ├── CVPreview.jsx
│ └── App.jsx
├── styles/
│ └── App.css
├── index.js
└── index.html
```

## 🔧 Getting Started

To run this project locally:

```bash
# Clone the repository

git clone https://github.com/your-username/your-repo.git
cd your-repo

# Install dependencies

npm install

# Start the development server

npm start
```

The app will open at http://localhost:3000

## 📤 Deploying to Netlify

1. Push the project to a GitHub repository

2. Log in to Netlify

3. Click **"Add new site"** > **"Import from Git"**

4. Select your GitHub repo

5. Set:

- Build command: `npm run build`

- Publish directory: `build/`

6. Click **Deploy Site** and wait for the deployment to finish.

7. Your site will be live at the Netlify-assigned URL (you can customize it in site settings).
