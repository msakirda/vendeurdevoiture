"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
const Vehicules_1 = require("./Vehicules");
class Camion extends Vehicules_1.Vehicule {
    constructor(marque, modele, couleur, immatriculation, kilometrage, prix, annee) {
        super(marque, modele, couleur, immatriculation, kilometrage, prix, annee);
    }
    afficherDetails() {
        console.log(`Camion ${this.marque} ${this.modele} (${this.annee})`);
        console.log(`Immatriculation: ${this.immatriculation}`);
        console.log(`Couleur: ${this.couleur}`);
        console.log(`Kilométrage: ${this.kilometrage} km`);
        console.log(`Prix: $${this.prix}`);
    }
    getType() {
        return "Camion";
    }
}
exports.Camion = Camion;
