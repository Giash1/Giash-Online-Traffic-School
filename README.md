Giash Online Traffic School

A full-featured, multilingual learning platform designed to help users understand Swedish traffic rules and regulations and prepare for the Swedish driving theory exam.
This project supports Swedish, English, and Bangla and includes MCQ quizzes, study modules, mock exams, and progress tracking.

🚦 Features
📘 Swedish Traffic Rules

Structured lessons explaining key traffic concepts, road signs, priority rules, fines, parking rules, and more.

🌍 Multilingual Support

All study material and MCQs are available in:

Swedish

English

Bangla

📝 MCQ Question Bank

Hundreds of practice questions

Explanations for correct answers

Topic-wise quiz categories

🎯 Mock Exam Simulator

Simulates the official Trafikverket theory test with:

Timer

Randomized questions

Pass/Fail evaluation

📊 User Dashboard

Track completed lessons

Review past test results

Monitor improvement

🔐 Authentication System

JWT-based login

User profile

Save progress on any device

🛠 Tech Stack
Frontend

React

TypeScript

Tailwind CSS / Material UI (optional)

Axios

Backend

Node.js

Express.js

MongoDB + Mongoose

Developer Tools

VS Code

Postman

Trello (task management)

NPM (package management)

GitHub (source control)

📁 Project Structure
Giash-Online-Traffic-School/
│
├── client/                 # React + TypeScript frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── utils/
│   │   └── assets/
│   └── package.json
│
├── server/                 # Node.js backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.ts
│
├── database/               # Optional seeds, backup, scripts
│
├── docs/                   # Documentation (API, language files)
│
├── .env.example
├── README.md
└── package.json

🗂 Trello Board Workflow
A Trello board is followed this simple development pipeline:

Columns

Backlog – All ideas, features, and future tasks

To Do – Tasks ready for development

In Progress – Currently being worked on

Review – Code waiting for review/testing

Completed – Finished and merged

Sample Cards

"Create MCQ question model (MongoDB)."

"Set up React + TypeScript project"

"Add Swedish → English → Bangla language files"

"Build mock exam page."

"Create user authentication AP.I"

"Deploy backend (Render/Vercel/DigitalOcean)."

🧭 Project Roadmap
Phase 1 – Foundation

Initialize GitHub repo

Set up a Trello board

Create frontend + backend boilerplate

Configure MongoDB

Phase 2 – Core Features

Lesson pages for Swedish traffic rules

Multilingual text system

MCQ question database

Quiz system

Phase 3 – Advanced Features

Mock exam simulator

Result tracking

User authentication + JWT

Phase 4 – UI/UX Improvement

Responsive design

Dashboard charts

Dark mode (optional)

Phase 5 – Deployment

Deploy server

Deploy client

Connect domain (optional)

🤝 Contribution Guidelines
How to Contribute

Fork the project

Create a new branch:

git checkout -b feature-name


Commit your changes:

git commit -m "Add feature description."


Push to your branch:

git push origin feature-name


Open a Pull Request

Coding Rules

Use TypeScript for both frontend & backend

Follow clean code principles

Write meaningful commit messages

Keep components small and reusable

📧 Contact

If you want help or wish to collaborate:

Developer: Giash
Project: Giash Online Traffic School
Email: giashsw@gmail.com
