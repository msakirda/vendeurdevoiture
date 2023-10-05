"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garage = void 0;
const Camion_1 = require("./Camion");
const Motos_1 = require("./Motos");
class Garage {
    constructor(nom, vehicules) {
        this.nom = nom;
        this.vehicules = vehicules;
    }
    trouverVoitureMoinsChere() {
        if (this.vehicules.length === 0) {
            return null;
        }
        let vehiculeMoinsCher = this.vehicules[0];
        for (const vehicule of this.vehicules) {
            if (vehicule.prix < vehiculeMoinsCher.prix) {
                vehiculeMoinsCher = vehicule;
            }
        }
        return vehiculeMoinsCher;
    }
    trouverVehiculesParCouleur(couleurRecherchee) {
        return this.vehicules.filter((vehicule) => vehicule.couleur.toLowerCase() === couleurRecherchee.toLowerCase());
    }
    trouverVehiculesParType(type) {
        return this.vehicules.filter((vehicule) => {
            return vehicule.getType() === type;
        });
    }
    getListVehiculeByKilometersDesc() {
        const vehicules = [...this.vehicules];
        vehicules.sort((a, b) => b.kilometrage - a.kilometrage);
        return vehicules;
    }
    trouverCamionPlusDe30Km() {
        return this.vehicules.filter((vehicule) => {
            return vehicule instanceof Camion_1.Camion && vehicule.kilometrage > 30000;
        });
    }
    trouverMotodecouleurnoir() {
        return this.vehicules.filter((vehicule) => {
            return vehicule instanceof Motos_1.Moto && vehicule.couleur.toLowerCase() === "noire";
        });
    }
}
exports.Garage = Garage;
