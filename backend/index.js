const matchesElement = document.querySelector('#container main section .matches-container')
const resultsElement = document.querySelector('#container main section .results-container')
const newsElement = document.querySelector('#container main section .news-container') 

const getMatches = async () => {
  try {
    const response = await fetch('http://localhost:3333/')
    const matchesData = await response.json()
    renderMatches(matchesData)
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
    // console.log(newsData)
  } catch (error) {
    console.error(error)
  }
}

getNews()

const getResults = async () => {
  try {
    const response = await fetch('http://localhost:3333/results')
    const resultsData = await response.json()
    // console.log(resultsData)
  } catch (error) {
    console.error(error)
  }
}

getResults()

// Render Content Functions

const renderMatches = (data) => {
  data.map(match => {
    const { event, teams, time } = match

    const matchContent = document.createElement('div')
    matchContent.setAttribute('class', 'match-content')
    matchesElement.appendChild(matchContent)
    
    const eventName = document.createElement('h1')
          eventName.innerHTML = event.name

    matchContent.appendChild(eventName)

    const teamContainer = document.createElement('div')
          teamContainer.setAttribute('class', 'team-container')
    
    teams.map(team => {
      const teamContent = document.createElement('div')
            teamContent.setAttribute('class', 'team-content')

      const teamName = document.createElement('h4')
            teamName.innerHTML = team.name
    
      const teamLogo = document.createElement('img')
            teamLogo.setAttribute('src', `${team.crest}`)

      teamContent.appendChild(teamName)
      teamContent.appendChild(teamLogo)
      teamContainer.appendChild(teamContent)
      matchContent.appendChild(teamContainer)
    })

    
    const eventTime = document.createElement('p')
          eventTime.innerHTML = new Date(time).toLocaleString()

    matchContent.appendChild(eventTime)
  })
}