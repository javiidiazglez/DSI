/* eslint-disable max-len */
import {Pokemon} from './pokemon';
import {Combate} from './combat';


let pokemon1: Pokemon = new Pokemon("Charmander", 8, 5, "Electrico", [54, 25, 7, 231]);
let pokemon2: Pokemon = new Pokemon("Squirtle", 4, 3, "Agua", [6, 44, 3, 480]);

let combate: Combate = new Combate(pokemon1, pokemon2);
pokemon1.showData();
pokemon2.showData();
combate.combatePokemon();