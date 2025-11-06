//DESARROLLA AQUI TUS SOLUCIONES

// Utilizando la api de Pokemon https://pokeapi.co/ y usando sólo 
// async/await:

// Antes de empezar, lee la documentación de la API para comprender como 
// funcionan los endpoints

// Ejercicio 1.- Declara una función getRandomPokemon que retorne un 
// pokemon aleatorio.



const getRandomPokemon = async () => {
    try {
        const totalPokemons = 
        const numRandom = Math.ceil(Math.random * totalPokemons) 
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${numRandom}`);
        
        if (resp.ok) {
            const data = await resp.json()
            return data
        }
    } catch (error) {
        console.log(error)
    }
}

// Ejercicio 2.- Declara una funcion getImageAndName que retorne el 
// nombre y la URL de la imagen de un pokemon => (return {img, name})

const getImageAndName = async (pokemon) {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        
        if (resp.ok) {
            const data = await resp.json()
            const name = data.name
            const img = data.sprites.front_default;
            return {name, img}
        }
    } catch (error) {
        console.log(error)
    }
}
 // Ejercicio 3.- Declara una funcion printImageAndName que retorne el 
 // string necesario para pintar la imagen y el nombre del pokemon en el 
 // DOM de la siguiente forma

const printImageAndName = async (pokemon) {
    try {
        const {name, img} = await getImageAndName(pokemon)
        html = `<section><img src="${img}" alt="$"><h1>${name}</h1></section>`
        return document.body.innerHTML = html

    } catch (error) {
        console.log(error)
    }
}

// Ejercicio 4.- Declara una función getRandomDogImage que retorne la url 
// de la imagen de un perro aleatorio

const getRandomDogImage = async () => {
    try {
        const resp = await fetch('https://dog.ceo/api/breeds/image/random');

        
        if (resp.ok) {
            const data = await resp.json()
            return data.message
        }
    } catch (error) {
        console.log(error)
    }
}

// Ejercicio 5.- Declara una función getRandomPokemonImage que retorne
// la url de la imagen de un pokemon aleatorio.

const getRandomPokemonImage = async () => {
    try {
        const pokemon = await getRandomPokemon();

        if (resp.ok) {
            return pokemon.sprites.front_default;
        }
    } catch (error) {
        console.log(error)
    }
}

// Ejercicio 6.- Declara una función printPugVsPikachu que pinte 
// la batalla entre "Pug" y "Pikachu" (no se testea)




// Ejercicio 7.- Declara una función getRandomCharacter que retorne un 
// personaje aleatorio.

const getRandomCharacter = async () => {
    try {
        const numeroPersonajes = 786
        const numRandom = Math.ceil(Math.random * numeroPersonajes) 
        const resp = await fetch(`https://rickandmortyapi.com/api/character/${numRandom}`);
        
        if (resp.ok) {
            const data = await resp.json()
            return data
        }
    } catch (error) {
        console.log(error)
    }
}


// Ejercicio 8.- Declara una función getRandomCharacterInfo que retorne 
// de un personaje su imagen, nombre, episodios en los que aparece y el 
// nombre del primer episodio en el que aparece + fecha de estreno, 
// tendrás que hacer otro fetch para llegar a los ultimos datos. Formato 
// de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})

const getRandomCharacterInfo = async () {
    try{
        const personaje = getRandomCharacter()
        const episodeResponse = await fetch(firstEpisodeUrl);
        const episodeData = await episodeResponse.json();

        

    }
}

// Ejercicio 9.- Pinta los anteriores datos en el DOM (no se testea)