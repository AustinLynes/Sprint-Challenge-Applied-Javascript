// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then((_response) => {
        console.log(_response);
        const __cards = new Cards(_response);


    })
    .catch((_err) => {
        console.error(_err);
    })

class Cards {
    constructor(_response) {
        this.__articles = _response.data.articles;
        this.__container = document.querySelector('.cards-container');

        console.log(this.__articles);

        for (var article in this.__articles) {
            for(var children in this.__articles[article]){
            this.__headline = this.__articles[article][children].headline;
            this.__image = this.__articles[article][children].authorPhoto;
            this.__name = this.__articles[article][children].authorName;

            this.createCard();

            this.createHeadline(this.__headline);

            this.createAuthor(this.__name, this.__image);

            }
        }
    }
    createCard() {
        this.__card = document.createElement('div');
        this.__card.classList.add('card');
        this.__container.appendChild(this.__card);
    }
    createHeadline(_hl) {
        this.__headline = document.createElement('h1');
        this.__headline.classList.add('headline');
        this.__headline.innerHTML = _hl;
        this.__card.appendChild(this.__headline);
    }
    createAuthor(_author, _src) {
        this.__author = document.createElement('div');
        this.__author.classList.add('author');
        this.__img_container = document.createElement('div');
        this.__img_container.classList.add('img-container');
        this.__author.appendChild(this.__img_container);
        console.log(this.__author);
        
        this.__img = document.createElement('img');
        this.__img.src = _src;
        this.__img_container.appendChild(this.__img);

        this.__author_txt = document.createElement('span');
        this.__author_txt.innerHTML = _author;
        this.__author.appendChild(this.__author_txt);
        this.__card.appendChild(this.__author);
    }
}

// Create a card for each of the articles and add the card to the DOM.
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>