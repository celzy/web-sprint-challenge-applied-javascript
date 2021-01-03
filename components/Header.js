// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function header() {
    const headerDiv = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');
    

    headerDiv.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    headerDate.textContent = "MARCH 28, 2020";
    headerTitle.textContent = "Lambda Times";
    headerTemp.textContent = "98°";

    // headerContainer.appendChild(headerDiv);
    headerDiv.appendChild(headerDate);
    headerDiv.appendChild(headerTitle);
    headerDiv.appendChild(headerTemp);
    
    return headerDiv; 

}
const  headerContainer = document.querySelector(".header-container");
headerContainer.append(header());


