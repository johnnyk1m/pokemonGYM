var apiUrl = "https://pokeapi.co/api/v2/pokemon/";
var apiUrl2 = "https://fizal.me/pokeapi/api/v2/name/"
var pokeName = document.querySelector("body").id;
var nameStat = document.querySelector(".name");
var hpStat = document.querySelector(".hp");
var attackStat = document.querySelector(".attack");
var defenseStat = document.querySelector(".defense");
var speedStat = document.querySelector(".speed");
var abilitiesStat = document.querySelector(".abilities");


function pokemonData(pokeName) {
	axios.get(apiUrl2 + pokeName + ".json")
		.then(response => {
			var data = response.data;
			var stat = data.stats;
			var moniker = data.name;
			var abilities = data.abilities;


			newPokemon = new Pokemon(moniker, stat[5].base_stat, stat[4].base_stat, stat[3].base_stat, stat[0].base_stat, abilities);

			nameStat.innerHTML = `NAME: ${newPokemon.name}<br />`
			hpStat.innerHTML = `HP: ${newPokemon.hp} <br />`
			attackStat.innerHTML = `ATTACK: ${newPokemon.attack} <br />`
			defenseStat.innerHTML = `DEFENSE: ${newPokemon.defense}<br />`
			speedStat.innerHTML = `SPEED: ${newPokemon.speed}<br />`

			var loopsicle = [];
			for (i = 0; i < newPokemon.abilities.length; i++) {
				loopsicle += "<br />" + abilities[i].ability.name;
			};

			abilitiesStat.innerHTML = `ABILITIES: ${loopsicle}`
		});
}

document.addEventListener("DOMContentLoaded", (event) => {
	pokemonData(pokeName);
});
