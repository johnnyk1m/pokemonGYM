var apiUrl = "https://pokeapi.co/api/v2/pokemon/";
var apiUrl2 = "https://fizal.me/pokeapi/api/v2/name/"
var pokeName = document.querySelector("body").id;
var nameStat = document.querySelector(".name");
var hpStat = document.querySelector(".hp");
var attackStat = document.querySelector(".attack");
var defenseStat = document.querySelector(".defense");
var speedStat = document.querySelector(".speed");
var abilitiesStat = document.querySelector(".abilities");

class Pokemon {
	constructor(name, hp, attack, defense, speed, abilities) {
		this.name = name;
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.speed = speed;
		this.abilities = abilities;
	};
};

function pokemonData(pokeName) {
	axios.get(apiUrl2 + pokeName + ".json")
		.then(response => {
			var data = response.data;
			var stat = data.stats;
			var moniker = data.name;
			var abilities = data.abilities;


			newPokemon = new Pokemon(moniker, stat[5].base_stat, stat[4].base_stat, stat[3].base_stat, stat[0].base_stat, abilities);

			nameStat.innerHTML = `NAME: ${newPokemon.name}`
			hpStat.innerHTML = `HP: ${newPokemon.hp}`
			attackStat.innerHTML = `ATTACK: ${newPokemon.attack}`
			defenseStat.innerHTML = `DEFENSE: ${newPokemon.defense}`
			speedStat.innerHTML = `SPEED: ${newPokemon.speed}`

			var loopsicle = [];
			for (i = 0; i < newPokemon.abilities.length; i++) {
				loopsicle += "<br /> <br />" + abilities[i].ability.name;
			};

			abilitiesStat.innerHTML = `ABILITIES: ${loopsicle}`
		});
}

document.addEventListener("DOMContentLoaded", (event) => {
	pokemonData(pokeName);
});
