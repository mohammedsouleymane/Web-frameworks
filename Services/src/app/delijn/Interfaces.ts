export interface Lijnen {
    bestemming: string;
    eindHalteBijSchrapping?: any;
    kleurAchterGrond: string;
    kleurAchterGrondRand: string;
    kleurVoorGrond: string;
    kleurVoorGrondRand: string;
    lijnNummerPubliek: string;
    lijnRichting: string;
    lijnType: string;
    predictionStatussen: string[];
    vertrekRealtimeTijdstip: any;
    vertrekTheoretischeTijdstip: any;
    vertrekTijd: string;
    viaBestemming: string;
}

export interface Halte {
    bestemmingen: string[];
    halteNummer: number;
    lijnen: Lijnen[];
    omschrijvingLang: string;
    serverTijd: number;
    toegankelijkheidsStatus: string[];
}

export interface RootObject {
    halte: Halte[];
}
