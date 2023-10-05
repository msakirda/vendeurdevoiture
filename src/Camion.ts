
import { Vehicule } from './Vehicules';

export class Camion extends Vehicule {
    
    constructor(
        marque: string,
        modele: string,
        couleur: string,
        immatriculation: string,
        kilometrage: number,
        prix: number,
        annee: number,
    
    ) {
        super(marque, modele, couleur, immatriculation, kilometrage, prix, annee, );
        
    }

    afficherDetails(): void {
        console.log(`Camion ${this.marque} ${this.modele} (${this.annee})`);
        console.log(`Immatriculation: ${this.immatriculation}`);
        console.log(`Couleur: ${this.couleur}`);
        console.log(`Kilométrage: ${this.kilometrage} km`);
        console.log(`Prix: $${this.prix}`);
    
    }

    getType(): string {
        return "Camion";
    }
}