# 🚀 Smooth Spend API

Hey there! Welcome to the **Smooth Spend API** repo. This is the backend server for a budget-tracking app I am currently building. 

The main app lets users take a photo of their receipts using their camera, and then sends that data to this API to automatically extract the total amount spent and item descriptions.

👉 **Live Project Link:** [https://smooth-spend-api.hackclub.app](https://smooth-spend-api.hackclub.app)

> ⚠️ **Note for Reviewers:** Since this is a pure backend API meant to communicate with a frontend app, visiting the main URL directly will just display a simple "Server is online" message!

---

### 🤖 AI Disclosure (For Stardance Review)
Just to be transparent for the Stardance certification: I used AI tools (like ChatGPT) during development to help write the Express backend routes, handle the API logic, and clean up this documentation.

---

### 🛠️ Tech Stack
* **Node.js & Express** – Handles the server logic and API endpoints.
* **PM2** – The process manager keeping the app running 24/7 in the background on Hack Club Nest.
* **Caddy / Nest Proxy** – Handles the reverse proxy and SSL setup.

---

### 🚀 Local Setup

If you want to clone the repo and run it locally, here is how:

#### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

#### 2. Installation
Open your terminal, clone the directory, and install the dependencies:
```bash
cd smooth-spend-api
npm install
