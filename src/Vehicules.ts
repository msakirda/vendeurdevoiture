export abstract class Vehicule {
    public marque: string;
    public modele: string;
    public couleur: string;
    public immatriculation: string;
    public kilometrage: number;
    public prix: number;
    public annee: number;

    constructor(
        marque: string,
        modele: string,
        couleur: string,
        immatriculation: string,
        kilometrage: number,
        prix: number,
        annee: number
    ) {
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
        this.immatriculation = immatriculation;
        this.kilometrage = kilometrage;
        this.prix = prix;
        this.annee = annee;
    }

    
    abstract afficherDetails(): void;

    
    abstract getType(): string;
}
