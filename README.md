# Meme Generator 

A simple web-based Meme Generator built using **Next.js 15**, **React 19**, and **TypeScript**. Users can add top and bottom text to a meme image, drag the text around the canvas, and download their creation as a PNG.

---

## 🚀 Features

- 🖼️ Upload your own image or use a default meme template
- 📝 Customizable top and bottom text
- 🎯 Drag-and-position text anywhere on the image
- 💾 Download the meme as a PNG file
- 🧠 Built with Next.js App Router and Tailwind CSS

---

## 📦 Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🛠️ Getting Started

1. Clone the Repository

```bash
 2. Install Dependencies
Using pnpm:

bash
Copy
Edit
pnpm install
3. Run the Development Server
bash
Copy
Edit
pnpm dev
Open http://localhost:3000 in your browser.

 Project Structure
pgsql
Copy
Edit
.
├── app/
│   └── page.tsx              # Main page with inputs and meme preview
├── components/
│   └── MemeCanvas.tsx        # Canvas logic with image and draggable text
├── public/
│   └── template.jpg          # Default meme template image
├── package.json
├── tsconfig.json
└── README.md

