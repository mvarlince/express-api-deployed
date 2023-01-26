import functions from "firebase-functions"
import express, { request, response } from "express"
import cors from "cors"

const app = express()
app.use(cors())

// setup routes
app.get('/test', (req, res) => {
    res.send('we made a cloud function')
})

app.get('/test2', (req, res) => {
    res.send('This other route also works')
})


export const api = functions.https.onRequest(app)

//export const api = functions.https.onRequest((request,response => app {request, response}))

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
