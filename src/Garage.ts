
import { Camion } from './Camion';
import { Moto } from './Motos';
import { Vehicule } from './Vehicules';

export class Garage {
    constructor(public nom: string, public vehicules: Vehicule[]) {}

    trouverVoitureMoinsChere(): Vehicule | null {
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

    trouverVehiculesParCouleur(couleurRecherchee: string): Vehicule[] {
        return this.vehicules.filter(
            (vehicule) => vehicule.couleur.toLowerCase() === couleurRecherchee.toLowerCase()
        );
    }

    trouverVehiculesParType(type: string): Vehicule[] {
        return this.vehicules.filter((vehicule) => {
            return vehicule.getType() === type;
        });
    }

    getListVehiculeByKilometersDesc(): Vehicule[] {
        const vehicules = [...this.vehicules]
        vehicules.sort( (a, b) => b.kilometrage - a.kilometrage)
        return vehicules
    }

    trouverCamionPlusDe30Km(): Camion[] {
        return this.vehicules.filter((vehicule) => {
            return vehicule instanceof Camion && vehicule.kilometrage > 30000;
        }) as Camion[];
    }
    trouverMotodecouleurnoir(): Moto[] {
        return this.vehicules.filter((vehicule) => {
            return vehicule instanceof Moto && vehicule.couleur.toLowerCase() === "noire";
        }) as Moto[];
    }
}

