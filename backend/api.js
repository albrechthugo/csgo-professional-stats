const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')
const PORT = 3333

app.use(cors())

app.get('/', async (req, res) => {
  const { data } = await axios.get('https://hltv-api.vercel.app/api/matches')
  return res.json(data)
})

app.get('/news', async (req, res) => {
  const { data } = await axios.get('https://hltv-api.vercel.app/api/news')
  return res.json(data)
})

app.get('/results', async (req, res) => {
  const { data } = await axios.get('https://hltv-api.vercel.app/api/results')
  return res.json(data)
})

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}.`)
})