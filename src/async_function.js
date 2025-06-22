import axios from "axios";
export async function characters(params) {
    try {
        //if we've already got cards inside the card container, we need to clean it each time we filter
        let alertContainer = document.querySelector("#alert-container"); //
        let cardContainer = document.querySelector("#card-container");
        cardContainer.innerHTML = ''; // Clear previous cards
        alertContainer.innerHTML = ''; // Clear previous alerts

        //here we obtain the data from the API
        let response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${params.name}&status=${params.status}&gender=${params.gender}`);
        let data = response.data.results;

        //Width the data that we've gotten, we procced to create the card
        data.map(character => {
            let card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            <p>Status: <span class="dot"  data-status="${character.status}"></span> ${character.status}</p>
            <p>gender: ${character.gender}</p>
            <p>Species: ${character.species}</p>
            <p>Location: ${character.location.name}</p>`;
            cardContainer.appendChild(card); //We end up adding the cards to the container we created above 
        })

    } catch (error) {
        // Handle errors and display an alert message
        let alertContainer = document.querySelector("#alert-container");
        let cardContainer = document.querySelector("#card-container");
        let alert = document.createElement('div');
        alert.className = 'alert';
        if (error.response.status === 404) {
            alert.innerHTML = `<p>No characters found with the given filters.</p>`;
            cardContainer.innerHTML = ''; // Clear previous cards
        } else {
            alert.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
            cardContainer.innerHTML = ''; // Clear previous cards
        }

        alertContainer.appendChild(alert); // Append the alert to the card container
    }
}