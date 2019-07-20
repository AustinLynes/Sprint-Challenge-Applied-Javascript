// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then((_response)=>{
        let tabs = new Tabs(_response);

    })
    .catch((_err)=>{
        console.log("DATA ERROR:: CANNOT SYNC WITH SERVER ::" + _err);
    })

class Tabs{
    constructor(_response){
        this.__data = _response.data;
        this.__topics = this.__data.topics;
        this.__container = document.querySelector('.topics');

        for(let i = 0; i< this.__topics.length; i++){
            this.__tab =  document.createElement('div');
            this.__tab.classList.add('tab');
            this.__tab.innerHTML = this.__topics[i];
            this.__container.appendChild(this.__tab);
        }
    }
}

