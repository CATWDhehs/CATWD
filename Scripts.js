const pokemonData = [
    { name: 'Pikachu', type: 'Electric', abilities: ['Static', 'Lightning Rod'] },
    { name: 'Charmander', type: 'Fire', abilities: ['Blaze', 'Solar Power'] },
    // ...add more Pokemon data here
];

// Function to display Pokemon data
function displayPokemon(pokemon) {
    const container = document.querySelector('.container');
    
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');
    
    const name = document.createElement('h2');
    name.textContent = pokemon.name;
    
    const type = document.createElement('p');
    type.textContent = `Type: ${pokemon.type}`;
    
    const abilities = document.createElement('p');
    abilities.textContent = `Abilities: ${pokemon.abilities.join(', ')}`;
    
    pokemonCard.appendChild(name);
    pokemonCard.appendChild(type);
    pokemonCard.appendChild(abilities);
    
    container.appendChild(pokemonCard);
}

// Call the displayPokemon function for each Pokemon in the data
pokemonData.forEach(displayPokemon);
