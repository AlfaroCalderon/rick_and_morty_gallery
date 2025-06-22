import { characters } from './async_function.js';
export function gallery() {

    //Here we create the form to filter the characters from the rick and morty API
    const galleryElement = document.createElement('div');
    galleryElement.className = 'main-container';
    galleryElement.id = 'main-container'
    galleryElement.innerHTML = `
    <form id="character-form" class="form-style">
        <label for="search">Search Character:</label>
        <input type="text" id="name" name="name" placeholder="Enter character name...">
        <label for="status">Status:</label>
        <select id="status" name="status">
            <option value="">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
        <label for="gender">Gender:</label>
        <select id="gender" name="gender">
            <option value="">All</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
            </select>
        <span>
        <button type="submit">Search</button>
        <span>
    </form>
      `
    // Append the gallery element to the app div inside the index.html file
    document.querySelector("#app").appendChild(galleryElement);

    // We create a container for the alert messages
    let alertContainer = document.createElement('div');
    alertContainer.className = 'alert-container';
    alertContainer.id = 'alert-container';
    document.querySelector('#main-container').appendChild(alertContainer);

    //We create the container of the cards here 
    let div = document.createElement('div')
    div.className = 'card-container';
    div.id = 'card-container'
    document.querySelector('#main-container').appendChild(div);


    // Add an event listener to the form to handle the search functionality
    document.getElementById("character-form").addEventListener('submit', (e) => {
        e.preventDefault();

        //we get filter's values
        let name = document.getElementById("name").value;
        let status = document.getElementById("status").value;
        let gender = document.getElementById("gender").value;

        //we sanitize the input values
        name = name.trim().toLowerCase();

        // Call the characters function with the filter values
        characters({ name, status, gender })

    })
}