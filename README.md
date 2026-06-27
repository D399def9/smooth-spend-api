# Smooth Spend API

This is the backend for a budget tracker app I'm building. The idea is simple: you take a picture of a receipt, and the API extracts the total amount and the purchased items.

API URL:
https://smooth-spend-api.hackclub.app

## Note for Reviewers

If you open the API URL in your browser, you'll only see a simple "Server is online" message. That's expected because this project is a backend API, not a website. It is designed to receive requests from the frontend application.

I used ChatGPT to better understand some Express concepts, troubleshoot bugs, and learn while developing the project. I reviewed and tested the code myself.

## Running Locally

```bash
git clone https://github.com/D399def9/smooth-spend-api
cd smooth-spend-api
npm install
npm start
```

## Italian

Questo è il backend di un'app per tracciare le spese. Scatti una foto dello scontrino e l'API estrae il totale e gli articoli acquistati. È ospitato su Nest, quindi visitando il link vedrai soltanto un messaggio che indica che il server è online.
