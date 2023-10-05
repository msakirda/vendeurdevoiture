"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const Vehicules_1 = require("./Vehicules");
class Moto extends Vehicules_1.Vehicule {
    constructor(marque, couleur, modele, immatriculation, kilometrage, prix, annee) {
        super(marque, modele, couleur, immatriculation, kilometrage, prix, annee);
    }
    afficherDetails() {
        console.log(`Marque: ${this.marque}`);
        console.log(`Modèle: ${this.modele}`);
        console.log(`Couleur: ${this.couleur}`);
        console.log(`Immatriculation: ${this.immatriculation}`);
        console.log(`Kilométrage: ${this.kilometrage} km`);
        console.log(`Prix: ${this.prix} EUR`);
        console.log(`Année de mise en circulation: ${this.annee}`);
    }
    getType() {
        return 'Moto';
    }
}
exports.Moto = Moto;
