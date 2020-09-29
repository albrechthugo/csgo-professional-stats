const getMatches = async () => {
  try {
    const response = await fetch('http://localhost:3333/')
    const matchesData = await response.json()
    console.log(matchesData)
  } catch (error) {
    console.error(error)
  }
}

getMatches()

const getNews = async () => {
  try {
    const response = await fetch('http://localhost:3333/news')
    const newsData = await response.json()
    console.log(newsData)
  } catch (error) {
    console.error(error)
  }
}

getNews()

const getResults = async () => {
  try {
    const response = await fetch('http://localhost:3333/results')
    const resultsData = await response.json()
    console.log(resultsData)
  } catch (error) {
    console.error(error)
  }
}

getResults()