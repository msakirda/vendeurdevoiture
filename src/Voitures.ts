import { Vehicule } from './Vehicules';

export class Voiture extends Vehicule {

    constructor(
        marque: string,
        modele: string,
        immatriculation: string,
        couleur: string,
        kilometrage: number,
        prix: number,
        annee: number
    ) {
        super(marque,modele, couleur, immatriculation, kilometrage, prix, annee);
    }

    afficherDetails(): void {
        console.log(`Marque: ${this.marque}`);
        console.log(`Modèle: ${this.modele}`);
        console.log(`Couleur: ${this.couleur}`);
        console.log(`Immatriculation: ${this.immatriculation}`);
        console.log(`Kilométrage: ${this.kilometrage} km`);
        console.log(`Prix: ${this.prix} EUR`);
        console.log(`Année de mise en circulation: ${this.annee}`);
    }

    getType(): string {
        return 'Voiture';
    }
}

