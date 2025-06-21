export function header() {
 //Here we  create the header element and add it to the DOM
    const headerElement = document.createElement('header')
    headerElement.className = 'header-style'
    headerElement.innerHTML = `
    <a href="#"><img src="https://res.cloudinary.com/dcostp8ak/image/upload/v1750518691/icons8-rick-sanchez-400_drtcgo.png" alt="rick" class="img-logo"></a>
    <a href="#"><img src="https://res.cloudinary.com/dcostp8ak/image/upload/v1750518691/icons8-morty-400_u3vs3d.png" alt="morty" class="img-logo"></a>
    <span class="webpage-title">
        <h2>Rick and Morty Gallery</h2>
    </span>
    `
    // Append the header element to the app div inisde the index.html file
    document.querySelector("#app").appendChild(headerElement);
}