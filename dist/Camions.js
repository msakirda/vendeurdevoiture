"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
const Vehicules_1 = require("./Vehicules");
class Camion extends Vehicules_1.Vehicule {
    constructor(marque, modele, couleur, immatriculation, kilometrage, prix, annee, capaciteCharge, typeCarburant) {
        super(marque, modele, couleur, immatriculation, kilometrage, prix, annee, capaciteCharge, typeCarburant);
        this.capaciteCharge = capaciteCharge;
        this.typeCarburant = typeCarburant;
    }
}
exports.Camion = Camion;
