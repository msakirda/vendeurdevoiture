"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voiture = void 0;
// Voitures.ts
const Vehicules_1 = require("./Vehicules");
class Voiture extends Vehicules_1.Vehicule {
    constructor(marque, modele, immatriculation, couleur, kilometrage, prix, annee) {
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
        return 'Voiture';
    }
}
exports.Voiture = Voiture;
//  const voiture1 = new Voiture("Toyota", "Camry", "AB-123-DE", "Bleu", 50000, 15000, 2018);
//  const voiture2 = new Voiture("Honda", "Civic", "XY-789-GR", "Rouge", 40000, 12000, 2019);
//  const voiture3 = new Voiture("Ford", "Focus", "DE-457-ZO", "Noir", 60000, 13000, 2017);
//  const voiture4 = new Voiture("Volkswagen", "Golf", "GH-789-AS", "Blanc", 35000, 14000, 2020);
//  const voiture5 = new Voiture("Chevrolet", "Malibu", "JK-142-ZX", "Gris", 55000, 11000, 2016);
//  voiture1.afficherDetails();
//  voiture2.afficherDetails();
//  voiture3.afficherDetails();
//  voiture4.afficherDetails();
//  voiture5.afficherDetails();
