import axios from "axios";
export async function characters(params) {
    try {
    let response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${params.name}&status=${params.status}&gender=${params.gender}`);
    
    console.log(response.data)

    } catch (error) {
        console.log(`Error fetching characters: ${error}`);
    }
}