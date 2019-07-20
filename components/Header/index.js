// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

class Header{
    constructor(){
        this.__container = document.querySelector(".header-container");
        this.__header = document.createElement("div");
        this.__header.classList.add("header");
        this.__container.appendChild(this.__header);

        this.__date = document.createElement("span");
        this.__date.classList.add("date");
        this.__date.innerHTML = "MARCH 28, 2019";
        
        this.__header.appendChild(this.__date);
        this.__title = document.createElement("h1");
        this.__title.innerHTML = "Lambda Times";
        this.__header.appendChild(this.__title);
        
        this.temp = document.createElement("span");
        this.temp.classList.add("temp");
        this.temp.innerHTML = "98°";
        this.__header.appendChild(this.temp);
        
    }
}

function header(){
    const __header = new Header();
}

header();