const matchesElement = document.querySelector('#container main section .matches-container')
const resultsElement = document.querySelector('#container main section .results-container')
const newsElement = document.querySelector('#container main section .news-container') 

const getMatches = async () => {
  try {
    const response = await fetch('http://localhost:3333/')
    const matchesData = await response.json()
    renderMatches(matchesData)
  } catch (error) {
    console.error(error)
  }
}

getMatches()

const getNews = async () => {
  try {
    const response = await fetch('http://localhost:3333/news')
    const newsData = await response.json()
    renderNews(newsData)
  } catch (error) {
    console.error(error)
  }
}

getNews()

const getResults = async () => {
  try {
    const response = await fetch('http://localhost:3333/results')
    const resultsData = await response.json()
    renderResults(resultsData)
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

const renderResults = (data) => {
  data.map(result => {
    const { event, maps, team1, team2 } = result

    // Div para cada um dos resultados

    const resultContent = document.createElement('div') 
    resultContent.setAttribute('class', 'result-content')
    resultsElement.appendChild(resultContent)

    const eventResultName = document.createElement('h1')
          eventResultName.innerHTML = event

    const mapName = document.createElement('p')
          mapName.setAttribute('class', 'map-type')
          mapName.innerHTML = maps

    resultContent.appendChild(eventResultName)
    resultContent.appendChild(mapName)

  // Div para o time 1

    const team1Content = document.createElement('div')
          team1Content.setAttribute('class', 'team1-content')

          const team1Logo = document.createElement('img')
                team1Logo.setAttribute('src', `${team1.crest}`)

          const team1Name = document.createElement('h4')
                team1Name.innerHTML = team1.name

          const team1Result = document.createElement('p')
                team1Result.innerHTML = team1.result
    
          team1Content.appendChild(team1Logo)
          team1Content.appendChild(team1Name)
          team1Content.appendChild(team1Result)

  // Div para o time 2

    const team2Content = document.createElement('div')
          team2Content.setAttribute('class', 'team2-content')

          const team2Logo = document.createElement('img')
                team2Logo.setAttribute('src', `${team2.crest}`)

          const team2Name = document.createElement('h4')
                team2Name.innerHTML = team2.name

          const team2Result = document.createElement('p')
                team2Result.innerHTML = team2.result
    
          team2Content.appendChild(team2Logo)
          team2Content.appendChild(team2Name)
          team2Content.appendChild(team2Result)


  // Colocando as duas divs dentro dos resultados

    resultContent.appendChild(team1Content)
    resultContent.appendChild(team2Content)
  })
}

const renderNews = (data) => {
  data.map(news => {
    const { title, description, link } = news

    const newsContent = document.createElement('div')
          newsContent.setAttribute('class', 'news-content')

    newsElement.appendChild(newsContent)

    const newsTitle = document.createElement('h1')
          newsTitle.innerHTML = title

    const newsDescription = document.createElement('p')
          newsDescription.innerHTML = description

    const newsLink = document.createElement('a')
          newsLink.setAttribute('href', `${link}`)
          newsLink.setAttribute('target', '_blank')
          newsLink.innerHTML = 'See more...'

    newsContent.appendChild(newsTitle)
    newsContent.appendChild(newsDescription)
    newsContent.appendChild(newsLink)
  })
}