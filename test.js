
// Define API URL
const apiUrl = 'https://swapi.dev/api/people';

// Fetch character data and populate character list
async function fetchCharacters() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const characterList = document.getElementById('character-list');

  data.results.forEach(character => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = character.name;
    listItem.addEventListener('click', () => displayCharacterDetails(character));
    characterList.appendChild(listItem);
  });
}

// Display character details
function displayCharacterDetails(character) {
  const characterImage = document.getElementById('character-image');
  const characterName = document.getElementById('character-name');
  const characterGender = document.getElementById('character-gender');
  const characterHeight = document.getElementById('character-height');
  const characterDetails = document.getElementById('character-details');

  characterImage.src = './image.avif'//'path_to_character_image.jpg'; // Replace with actual image path
  characterName.textContent = character.name;
  characterGender.textContent = character.gender;
  characterHeight.textContent = character.height;
  characterDetails.style.display = 'block';
}

// Initial function to start fetching data
fetchCharacters();
