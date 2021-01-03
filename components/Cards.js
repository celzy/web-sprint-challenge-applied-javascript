// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


function articleCards(object) {
  const cardHolderDiv = document.createElement("div")
  cardHolderDiv.classList.add("card")

  const headlineDiv = document.createElement("div")
  headlineDiv.classList.add("headline")
  headlineDiv.textContent = object[0]

  const authorDiv = document.createElement("div")
  authorDiv.classList.add("author")

  const imgContainer = document.createElement("div")
  imgContainer.classList.add("img-container")
  
  const authImg = document.createElement("img")
  authImg.src = object[1]

  const creditSpan = document.createElement("span")
  creditSpan.textContent = object[2]
  
  cardHolderDiv.appendChild(headlineDiv)
  cardHolderDiv.appendChild(authorDiv)
  authorDiv.appendChild(imgContainer)
  imgContainer.appendChild(authImg)
  authorDiv.appendChild(creditSpan)

    cardHolderDiv.addEventListener('click', (event) => {
        console.log(headlineDiv)
    })
  
  return cardHolderDiv
}

const cardSection = document.querySelector('.cards-container')



axios.get("https://lambda-times-backend.herokuapp.com/articles").then(res => {
    
    let articleTopics = [];
    
     const topics = Object.values(res.data.articles)
    

    const lambda = Object.values(res.data.articles.javascript)

     lambda.forEach(item => {
         let newArt = Object.values(item)
        
     })

    const arts = Object.values(res.data.articles)
    

    arts.forEach(item => {
        item.forEach(data =>{
            let artInfo = Object.values(data)
            
            articleTopics.push(artInfo)
        })
    })

   
    articleTopics.forEach(data => {
        const newArts = [];
        newArts.push(data[0], data[1], data[2])
        cardSection.append(articleCards(newArts))
        
    })
})
