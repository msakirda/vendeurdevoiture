import { Voiture } from './Voitures';
import {Moto} from './Motos'
import { Garage } from './Garage';
import { Camion } from './Camion';


const voiture1 = new Voiture("Toyota", "Camry", "AB-123-DE", "Bleu", 50000, 15000, 2018);
const voiture2 = new Voiture("Honda", "Civic", "XY-789-GR", "Rouge", 40000, 12000, 2019);
const voiture3 = new Voiture("Ford", "Focus", "DE-457-ZO", "Noir", 60000, 13000, 2017);
const voiture4 = new Voiture("Volkswagen", "Golf", "GH-789-AS", "Blanc", 35000, 14000, 2020);
const voiture5 = new Voiture("Chevrolet", "Malibu", "JK-142-ZX", "Rouge", 55000, 11000, 2016);

const moto1 = new Moto("Harley-Davidson", "Noire", "Sportster", "HAR-456-BL", 20000, 8000, 2020);
const moto2 = new Moto("Yamaha", "Bleue", "MT-09", "YAM-789-RD", 15000, 6000, 2019);

const camion1 = new Camion("Peugeot", "blanc", "van", "DW-545-SR", 35000, 15000, 2015);

const monGarage = new Garage("Mon Garage", [voiture1, voiture2, voiture3, voiture4, voiture5, moto1, moto2, camion1]);


const voitureLaMoinsChere = monGarage.trouverVoitureMoinsChere();
if (voitureLaMoinsChere instanceof Voiture) {
    console.log(`La voiture la moins chère est une ${voitureLaMoinsChere.marque} ${voitureLaMoinsChere.modele}.`);
} else {
    console.log(`Il n'y a pas de voitures dans le garage.`);
}

const voituresRouges = monGarage.trouverVehiculesParCouleur("rouge");
if (voituresRouges.length > 0) {
    console.log(`Voitures rouges dans le garage:`);
    for (const voiture of voituresRouges) {
        console.log(`${voiture.marque} ${voiture.couleur}`);
    }
} else {
    console.log(`Il n'y a pas de voitures rouges dans le garage.`);
}

const voituresAvecPlusDeKilometres = monGarage.getListVehiculeByKilometersDesc();
console.log('list', voituresAvecPlusDeKilometres);

const voitureRougeAvecLePlusDeKilometres = voituresAvecPlusDeKilometres.find(v => v.couleur === "Rouge")
if (voitureRougeAvecLePlusDeKilometres) {
    console.log(`La voiture avec le plus de kilomètres est une ${voitureRougeAvecLePlusDeKilometres.marque} ${voitureRougeAvecLePlusDeKilometres.couleur} avec ${voitureRougeAvecLePlusDeKilometres.kilometrage} km.`);
} else {
    console.log(`Il n'y a pas de voitures rouges dans le garage.`);
}

const camionsPlusDe30Km = monGarage.trouverCamionPlusDe30Km();

if (camionsPlusDe30Km.length > 0) {
    console.log(`Camions de plus de 30 000 km dans le garage:`);
    for (const camion of camionsPlusDe30Km) {
        console.log(`${camion.marque} ${camion.modele} - Kilométrage : ${camion.kilometrage} km`);
    }
} else {
    console.log(`Il n'y a pas de camions de plus de 30 000 km dans le garage.`);}

const motosNoires = monGarage.trouverMotodecouleurnoir();

if (motosNoires.length > 0) {
    console.log(`Motos noires dans le garage:`);
    for (const moto of motosNoires) {
        console.log(`${moto.marque} ${moto.modele}`);
    }
} else {
    console.log(`Il n'y a pas de motos noires dans le garage.`);
}


