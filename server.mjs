// express js is a server framework
import express from 'express';
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!'+ new Date())
})
app.get('/profile', (req, res) => {
    res.send('This is Profile!')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})